const {Router} = require("express")
const mercadopago = require("../controllers/mercadopago/mercadoPago")
const createOrder = require("../controllers/mercadopago/createOrder")
const reject = require("../controllers/mercadopago/reject")


const mercadopagoRoutes = Router()

mercadopagoRoutes.post("/redir", mercadopago)
mercadopagoRoutes.post("/success", createOrder)
mercadopagoRoutes.post("/reject", reject)


module.exports = mercadopagoRoutes