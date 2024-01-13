const {Users, Products} = require("../../db")


const createOrder = async (req, res) => {
    
    console.log(" llego algo---------------------------------------------------------------")
    
    console.log(" respuesta req.params------------ " + req.params + "------------")
    console.log(" respuesta req.query------------ " + req.query + "------------")
    console.log(" respuesta req.body------------ " + req.body + "------------")


    // console.log("pago rechazado por algun motivo")
    // // console.error(error)
    

    res.status(200).json("error.message-------------llegaste a aaaaaaaaaaaaaaaaaaaaaaaaa")
    // const newArray = arrayProducts.map(e => {
    //     return {
    //         title: e.name,
    //         description: e.descripcion,
    //         picture_url: e.imagen,
    //         category_id: e.categoria,
    //         unit_price: e.precio,
    //         currency_id: "ARS",
    //         quantity: e.cantidad
    //     }
    // })
    
    // try {

    //     const preferences = {
    //         items: newArray,
    //         back_urls: {
    //             success: `${req.protocol}://${req.get(`host`)}/mercadopago/success`,
    //             failure: `${req.protocol}://${req.get(`host`)}/mercadopago/success`,
    //         },
    //         auto_return: "approved"
    //     }

    //     const respuesta = await mercadopago.preferences.create(preferences)
    //     console.log(respuesta)
    //     res.status(200).json(respuesta.response.init_point)
  
    // } catch (error) {
  
    //     console.error(error)
    //     res.status(500).json(error.message)
  
    // }
  
  }
  module.exports = createOrder