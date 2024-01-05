const { Router } = require('express');

const {createOrder} = require("../controllers/orders/createOrders.controllers")
const {deleteOrder} = require("../controllers/orders/deleteOrders.controllers")
const {updateOrder} = require("../controllers/orders/updateOrders.controller")
const {getOrder} = require("../controllers/orders/getOrders.controllers");
const { restoreOrder } = require('../controllers/orders/restoreOrders.controllers');


const ordersRoutes = Router();

ordersRoutes.post("/create", createOrder)
ordersRoutes.delete("/delete/:id", deleteOrder)
ordersRoutes.post("/get", getOrder)
ordersRoutes.put("/update/:id", updateOrder)
ordersRoutes.patch("/restore/:id", restoreOrder)

module.exports = ordersRoutes;