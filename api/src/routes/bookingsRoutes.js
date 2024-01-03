const { Router } = require('express');

const {createBooking} = require("../controllers/bookings/createBooking")
const {deleteBooking} = require("../controllers/bookings/deleteBooking")
const {getBooking} =    require("../controllers/bookings/getBooking")
const {updateBooking} = require("../controllers/bookings/updateBooking")


const bookingsRoutes = Router();

bookingsRoutes.post("/", createBooking)
bookingsRoutes.delete("/:id", deleteBooking)
bookingsRoutes.get("/", getBooking)
bookingsRoutes.put("/:id", updateBooking)

module.exports = bookingsRoutes;


