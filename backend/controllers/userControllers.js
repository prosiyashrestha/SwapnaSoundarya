const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

// Create a new user
const createUser = async (req, res) => {
  const { firstName, lastName, email, password, service, phone } = req.body;

  if (!firstName || !lastName || !email || !password || !phone) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      service: service || null,
      provider: !!service,
      coordinates: { type: "Point", coordinates: [0, 0] },
    });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully." });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required." });
  }

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      token,
      userData: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        provider: user.provider,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Get a single user by ID or email
const getSingleUser = async (req, res) => {
  try {
    const identifier = req.params.id;

    const query = identifier.includes("@") // If it's an email
      ? { email: identifier }
      : { _id: identifier }; // Otherwise, assume it's an ObjectId

    const user = await Users.findOne(query);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// Update user profile
const updateUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const userId = req.params.id;

  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "User ID is required." });
  }

  try {
    const updateData = { firstName, lastName, email };

    // If a file is uploaded, include the file path in updateData
    if (req.file) {
      updateData.photo = `uploads/${req.file.filename}`;
    }

    const updatedUser = await Users.findByIdAndUpdate(userId, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Apply schema validation rules
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        photo: updatedUser.photo, // Include the photo path in the response
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update profile." });
  }
};

// Change user password
const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect." });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: "Password changed successfully!" });
  } catch (error) {
    console.error("Error changing password:", error);
    res
      .status(500)
      .json({ error: "Failed to change password. Please try again." });
  }
};

module.exports = {
  createUser,
  loginUser,
  getSingleUser,
  updateUser,
  changePassword,
};
