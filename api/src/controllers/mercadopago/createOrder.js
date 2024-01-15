const { References, Orders, Users, Products } = require("../../db")
const mailTo = require("../mailer/mailTo")

const createOrders = async (req, res) => {

  try {

    const {external_reference, status, payment_id, merchant_order_id} = req.query

    const reference = await References.findByPk(external_reference)

    const user = await Users.findByPk(reference.data.userID)

    for (const item of reference.data.items) {
      
      const {productID, quantity} = item

      const product = await Products.findByPk(productID)
      
      if (product) {
        const finalStock = product.stock -quantity
        await product.update({
          stock: finalStock >= 0 ? finalStock : product.stock,
          status: finalStock === 0 ? "disabled" : product.status
        })
      }

      const order = await Orders.create({
        userID: reference.data.userID, 
        productID, 
        // serviceID, 
        date: Date.now(), 
        quantity, 
        amount: product.price, 
        type: "product", 
        mp_status: status, 
        mp_payment_id: payment_id, 
        mp_merchant_order_id: merchant_order_id, 
        mp_external_reference: external_reference

      })
    }

    // Vacío el carrito de compras
    const cart = await user.update({ cart: [] });
    // Vacío la tabla reference
    const disableReference = await reference.update({status: "disabled"})
    // Mando un correo al usuario

    const emailData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: "fuegianboy@gmail.com",
      subject: `Pago Realizado`,
      html: `Señor ${user.firstName}. El pago se ha realizado sin inconvenientes. Numero de transacción ${payment_id} Estado ${status} Se creo el registro de la compra`,
      link: "www.google.com",
    };

    await mailTo({ body: emailData }, res);

    return res.status(200);
  } catch (error) {
    console.error('Error al editar Order:', error);
    return res.status(500).send('Error interno del servidor');
  }
  
}

module.exports = createOrders