const {Products, References} = require("../../db")
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN || "",
});

const createReference = async (data) => {
  const newReference = await References.create({
    data,
  });
  
  return newReference
}

const mercadoPago = async (req, res) => {
  try {
    
    const { items, userID } = req.body;

    const reference = await createReference(req.body)
    
    const preferenceItems = []
    
    const external_reference = reference.referenceID 

    for (const item of items) {
      const {productID, quantity} = item
      const itemFound = await Products.findByPk(productID)
      preferenceItems.push({
        title: itemFound.name,
        description: itemFound.description,
        picture_url: itemFound.image,
        category_id: itemFound.category,
        unit_price: itemFound.price,
        currency_id: "ARS",
        quantity,
      })
    }

    const preferences = {
      items: preferenceItems,
      back_urls: {
        success: `${req.protocol}://${req.get("host")}/mercadopago/success`,
        failure: `${req.protocol}://${req.get("host")}/mercadopago/reject`,
      },
      auto_return: "approved",
      external_reference,
    };

    const respuesta = await mercadopago.preferences.create(preferences);
    res.status(200).json(respuesta.response.init_point);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = mercadoPago;
