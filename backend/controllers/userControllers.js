const Users = require("../models/userModel"); // Adjust the path based on your folder structure
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const createUser = async (req, res) => {
//   // Step 1: Check incoming data
//   console.log(req.body); // body includes JSON data

//   // Step 2: Destructure the JSON data
//   const { firstName, lastName, email, password } = req.body;

//   // Step 3: Validate the data
//   if (!firstName || !lastName || !email || !password) {
//     return res.json({
//       success: false,
//       message: "Please enter all fields.",
//     });
//   }

//   try {
//     // Step 4: Check if the user already exists
//     const existingUser = await Users.findOne({ email });
//     if (existingUser) {
//       return res.json({
//         success: false,
//         message: "User already exists.",
//       });
//     }

//     // Step 5: Encrypt the password
//     const generateSalt = await bcrypt.genSalt(10);
//     const encryptedPassword = await bcrypt.hash(password, generateSalt);

//     // Step 6: Create new user object
//     const newUser = new Users({
//       firstName,
//       lastName,
//       email,
//       password: encryptedPassword,
//       ...(service && { service, provider: true }),
//     });

//     // Step 7: Save user
//     await newUser.save();

//     // Step 8: Send response
//     res.json({
//       success: true,
//       message: "User created successfully.",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
//   }
// };

const createUser = async (req, res) => {
  console.log(req.body); // Log the incoming request for debugging

  const { firstName, lastName, email, password, service, phone } = req.body;

  if (!firstName || !lastName || !email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: "Please enter all required fields.",
    });
  }

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists.",
      });
    }

    // Encrypt the password
    const bcrypt = require("bcrypt");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new Users({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      service: service || null, // Default to null if not provided
      provider: !!service, // Set provider to true if service exists
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        service: newUser.service,
        provider: newUser.provider,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  console.log("Request Body:", req.body);

  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  try {
    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist.",
      });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Send response (exclude sensitive fields like password)
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

const getSingleUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.json({
      success: false,
      message: "User ID is required!",
    });
  }
  try {
    const user = await Users.findById(id);
    res.json({
      success: true,
      message: "User fetched successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await Users.findByIdAndDelete(userId);
    await Requests.deleteMany({ providerId: userId });
    await Notification.deleteMany({ providerId: userId });
    await Favourites.deleteMany({ providerId: userId });
    await Feedback.deleteMany({ providerId: userId });

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getUserFromEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const users = await Users.find({ email });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

module.exports = {
  createUser,
  loginUser,
  getSingleUser,
  deleteUser,
  getUserFromEmail,
};
