const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = "RAKESH";

exports.signup = async (req, res) => {
  try {
    const { FirstName, LastName, Age, Email, Password } = req.body;

    const exitingUser = await User.findOne({ Email });
    if (exitingUser)
      return res.status(400).json({ message: "Email already exists." });

    const hashedPassword = await bcrypt.hash(Password, 10);

    const newUser = new User({
      FirstName,
      LastName,
      Age,
      Email,
      Password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

exports.login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ Email });
    if (!user) return res.status(400).json({ message: "Invalid credentials." });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ token, message: "Logged in successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Server error." });
  }
};
