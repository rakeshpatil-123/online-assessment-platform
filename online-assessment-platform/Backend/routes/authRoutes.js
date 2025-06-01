// backend/routes/authRoutes.js
const express = require("express");
const { signup, login } = require("../controllers/authController");
const { validateSignup, validateLogin } = require("../validators/authValidator");

const router = express.Router();

// Signup and Login routes
router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);

module.exports = router;
