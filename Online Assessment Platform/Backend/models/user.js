const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    trim: true,
  },
  LastName: {
    type: String,
    required: true,
    trim: true,
  },
  Age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: "Invalid email address.",
    },
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
