const {Router} = require("express")
const mailTo = require("../controllers/mailer/mailTo")

const mailerRoutes = Router()

mailerRoutes.post("/", mailTo)

module.exports = mailerRoutes