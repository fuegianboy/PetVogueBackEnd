const { Router } = require("express");

const usersRoutes = require("./usersRoutes")
const ordersRoutes = require("./ordersRoutes")
const mailerRoutes = require("./mailerRoutes")
const assetsRoutes = require("./assetsRoutes")
const bookingsRoutes = require("./bookingsRoutes")

const reviewsRouter = require("./reviewsRoutes");
const productRouter = require("./productsRoutes");
const servicesRouter = require("./servicesRouter");
const petsRouter = require('./petRoutes');
const mercadopagoRoutes = require("./mercadopagoRoutes");
const referencesRoutes = require("./referencesRoutes")

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/orders", ordersRoutes)
routes.use("/reviews", reviewsRouter)
routes.use("/products", productRouter)
routes.use("/services", servicesRouter);
routes.use("/pets", petsRouter);
routes.use("/mailto", mailerRoutes)
routes.use("/assets", assetsRoutes)
routes.use("/bookings", bookingsRoutes)
routes.use("/mercadopago", mercadopagoRoutes)
routes.use("/references", referencesRoutes)

module.exports = routes;
