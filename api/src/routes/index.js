const { Router } = require("express");
const usersRoutes = require("./usersRoutes")
const reviewsRoutes = require("./reviewsRoutes");
const productRoutes = require("./productsRoutes");

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/reviews", reviewsRoutes)
routes.use("/products", productRoutes)

module.exports = routes;
