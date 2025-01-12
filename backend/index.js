// importing
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./database/db");
const cors = require("cors");
const multiparty = require("connect-multiparty");
const path = require("path");

// Initialize the express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// CORS policy
const corsPolicy = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsPolicy));

// Middleware to parse JSON and handle multipart data
app.use(express.json());
app.use(multiparty());

// Static folder for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/provider", require("./routes/providerRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error Stack:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Fallback route for unmatched paths
app.use((req, res, next) => {
  res.status(404).json({ error: "API endpoint not found!" });
});

// Define the server port
const PORT = process.env.PORT || 5500;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing or other purposes
module.exports = app;
