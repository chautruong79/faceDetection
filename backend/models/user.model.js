const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    password: { type: String, required: true },
    entries: { type: Number, default: 0 },
    joined: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(uniqueValidator, { message: "is already taken." });

const User = mongoose.model("User", userSchema);

module.exports = User;
