const { Router } = require('express');

const {createOrder} = require("../controllers/orders/createOrders.controllers")
const {deleteOrder} = require("../controllers/orders/deleteOrders.controllers")
const {updateOrder} = require("../controllers/orders/updateOrders.controller")
const {getOrder} = require("../controllers/orders/getOrders.controllers")


const ordersRoutes = Router();

ordersRoutes.post("/", createOrder)
ordersRoutes.delete("/:id", deleteOrder)
ordersRoutes.put("/:id", updateOrder)
ordersRoutes.get("/", getOrder)

module.exports = ordersRoutes;