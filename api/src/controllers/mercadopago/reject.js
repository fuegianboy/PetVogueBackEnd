const mercadopago = require("mercadopago")
const dotenv = require("dotenv")
dotenv.config()

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN || ""
})

const reject = async (req, res) => {

    try {
        const errorMessage = "El pago no se pudo realizar. Por favor, inténtelo de nuevo.";
        res.send(`<script>alert('${errorMessage}'); window.location.href = 'https://petvoguehome-production.up.railway.app/';</script>`);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor", details: error.message });
        }  
    }
  
  module.exports = reject