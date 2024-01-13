const mercadopago = require("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN || ""
})

const mercadoPago = async (req, res) => {
    
    const arrayProducts = req.body
    
    const newArray = arrayProducts.map(e => {
        return {
            title: e.name,
            description: e.descripcion,
            picture_url: e.imagen,
            category_id: e.categoria,
            unit_price: e.precio,
            currency_id: "ARS",
            quantity: e.cantidad
        }
    })
    
    try {

        const preferences = {
            items: newArray,
            back_urls: {
                success: `${req.protocol}://${req.get(`host`)}/mercadopago/success`,
                failure: `${req.protocol}://${req.get(`host`)}/mercadopago/reject`,
            },
            // auto_return: "approved"

        }

        const respuesta = await mercadopago.preferences.create(preferences)
        // console.log(respuesta)
        res.status(200).json(respuesta.response.init_point)
  
    } catch (error) {
  
        console.error(error)
        res.status(500).json(error.message)
  
    }
  
  }
  module.exports = mercadoPago