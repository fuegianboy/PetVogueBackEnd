const { Router } = require("express");
const usersRoutes = require("./usersRoutes")
const reviewsRouter = require("./reviewsRoutes");
const productRouter = require("./productsRoutes");

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/reviews", reviewsRouter)
routes.use("/products", productRouter)

module.exports = routes;
