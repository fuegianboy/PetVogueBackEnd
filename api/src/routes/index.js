const { Router } = require("express");
const usersRoutes = require("./usersRoutes")
const ordersRoutes = require("./ordersRoutes")

const routes = Router();

routes.use("/users", usersRoutes)
routes.use("/orders", ordersRoutes)

module.exports = routes;