const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

// Controller to create a new booking
exports.createBooking = async (req, res) => {
  const { userId, category, subCategory, service, price, location } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new booking
    const booking = new Booking({
      userId,
      username: `${user.firstName} ${user.lastName}`,
      category,
      subCategory,
      service,
      price,
      location,
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Error creating booking", error });
  }
};

// Controller to get all bookings for a user
exports.getUserBookings = async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Controller to get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "firstName lastName email") // Populate user data
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

// Controller to update booking status
exports.updateBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, acceptedBy } = req.body;
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = status || booking.status;
    booking.acceptedBy = acceptedBy || booking.acceptedBy;
    await booking.save();

    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (error) {
    console.error("Error updating booking:", error);
    res.status(500).json({ message: "Error updating booking", error });
  }
};
