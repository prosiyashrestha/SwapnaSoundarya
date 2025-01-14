const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    service: { type: String, default: "" },
    provider: { type: Boolean, default: false },
    photo: { type: String, default: "" },
    coordinates: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0], required: true },
    },
  },
  { timestamps: true }
);

userSchema.index({ coordinates: "2dsphere" });

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
