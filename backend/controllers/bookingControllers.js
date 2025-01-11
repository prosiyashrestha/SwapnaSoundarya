const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

// Controller to create a new booking
exports.createBooking = async (req, res) => {
  const { email, username, category, subCategory, service, price, location } =
    req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new booking
    const booking = new Booking({
      email,
      username,
      category,
      subCategory,
      service,
      price,
      location,
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Controller to get all bookings for a user
exports.getUserBookings = async (req, res) => {
  const { email } = req.params;

  try {
    const bookings = await Booking.find({ email }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

exports.UpdateBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);
    const { status, acceptedBy } = req.body;
    console.log(status, acceptedBy);
    if (status == "Accepted") {
      booking.status = status;
      booking.acceptedBy = acceptedBy;
      await booking.save();
      res
        .status(201)
        .json({ message: "Booking" + status + "successfully", booking });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};
