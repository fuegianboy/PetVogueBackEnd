const { Router } = require('express');

const {createOrder} = require("../controllers/orders/createOrders.controllers")


const ordersRoutes = Router();

usersRoutes.post("/", createOrder)

module.exports = ordersRoutes;