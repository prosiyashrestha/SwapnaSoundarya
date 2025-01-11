const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
    min: 0,
    max: 5,
  },
  ratingSum: {
    type: Number,
    default: 0,
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  service: {
    type: String,
    required: false,
  },
  provider: {
    type: Boolean,
    default: false,
  },
  coordinates: {
    // Add coordinates field
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  photo: { type: String }, // Path to uploaded photo
  cv: { type: String }, // Path to uploaded CV
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
