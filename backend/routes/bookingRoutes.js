const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingControllers");

// Route to create a new booking
router.post("/book", BookingController.createBooking);

// Route to get all bookings for a user
router.get("/user/:email", BookingController.getUserBookings);

router.get("/all", BookingController.getAllBookings);

router.put("/:id", BookingController.UpdateBooking);
module.exports = router;
