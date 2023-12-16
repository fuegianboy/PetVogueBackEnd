const { Router } = require('express');

const {createOrder} = require("../controllers/orders/createOrders.controllers")


const ordersRoutes = Router();

ordersRoutes.post("/", createOrder)

module.exports = ordersRoutes;