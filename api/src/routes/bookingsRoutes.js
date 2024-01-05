const { Router } = require('express');

const {createBooking} = require("../controllers/bookings/createBooking")
const {deleteBooking} = require("../controllers/bookings/deleteBooking")
const {getBooking} =    require("../controllers/bookings/getBooking")
const {updateBooking} = require("../controllers/bookings/updateBooking")
const {restoreBooking} = require("../controllers/bookings/restoreBookings")


const bookingsRoutes = Router();

bookingsRoutes.post("/create", createBooking)
bookingsRoutes.delete("/delete/:id", deleteBooking)
bookingsRoutes.post("/get", getBooking)
bookingsRoutes.put("/update/:id", updateBooking)
bookingsRoutes.patch("/restore/:id", restoreBooking)

module.exports = bookingsRoutes;


