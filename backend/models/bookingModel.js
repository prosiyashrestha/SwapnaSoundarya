const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  service: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: "Not Accepted" },
  acceptedBy: { type: String, default: "N/A" },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
