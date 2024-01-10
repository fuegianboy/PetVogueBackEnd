const {Router} = require("express")
const mercadopago = require("../controllers/mercadopago/mercadoPago")

const mercadopagoRoutes = Router()

mercadopagoRoutes.post("/", mercadopago)

module.exports = mercadopagoRoutes