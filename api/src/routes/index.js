const { Router } = require("express");

const usersRoutes = require("./usersRoutes")
const ordersRoutes = require("./ordersRoutes")

const reviewsRouter = require("./reviewsRoutes");
const productRouter = require("./productsRoutes");

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/orders", ordersRoutes)
routes.use("/reviews", reviewsRouter)
routes.use("/products", productRouter)

module.exports = routes;
