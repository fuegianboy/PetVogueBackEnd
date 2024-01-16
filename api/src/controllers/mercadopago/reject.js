const mercadopago = require("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN || ""
})

const reject = async (req, res) => {

    console.log("pago rechazado por algun motivo")
    // console.error(error)
    res.json("error.message-------------llegaste")
  
    }
  
  module.exports = reject