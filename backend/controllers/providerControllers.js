const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const createProvider = async (req, res) => {
  const { firstName, lastName, email, phone, password, photo, cv } = req.body;

  if (!firstName || !lastName || !email || !phone || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      photo,
      cv,
      provider: true,
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "Beautician registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createProvider };
