// Import express
const express = require('express');
const URL = require('../models/url'); // Importing the URL model

// Import router
const router = express.Router();

// Route to handle the home page
router.get('/', async (req, res) => {
  // Check if the user is authenticated
  if (!req.user) return res.redirect("/login");

  // Find all URLs created by the authenticated user
  const allURLS = await URL.find({ createdBy: req.user._id });

  // Render the home page with the user's URLs
  return res.render("home", {
    urls: allURLS,
  });
});

// Route to handle the signup page
router.get("/signup", (req, res) => {
  // Render the signup page
  return res.render("signup");
});

// Route to handle the login page
router.get("/login", (req, res) => {
  // Render the login page
  return res.render("login");
});

module.exports = router; // Export the router