const { v4: uuidv4 } = require('uuid'); // Importing the uuid library to generate unique session IDs
const User = require('../models/users'); // Importing the User model
const { setUser } = require('../service/auth'); // Importing the setUser function from the auth service

// Function to handle user signup
async function handleUserSignup(req, res) {
  // Extracting name, email, and password from the request body
  const { name, email, password } = req.body;

  // Creating a new user with the provided name, email, and password
  await User.create({
    name,
    email,
    password,
  });

  // Rendering the home page after successful signup
  return res.render("home");
}

// Function to handle user login
async function handleUserLogin(req, res) {
  // Extracting email and password from the request body
  const { email, password } = req.body;

  // Finding the user with the provided email and password
  const user = await User.findOne({ email, password });

  // If no user is found, render the login page with an error message
  if (!user) {
    return res.render("login", { 
      error: "Invalid email or password",
    });
  }

  

  /* stateful authentication 
  // Generate a unique session ID
  const sessionId = uuidv4();

  // Set the user in the session map with the generated session ID
  setUser(sessionId, user);

  // Set a cookie with the session ID
  res.cookie("uid", sessionId);

  */


  /* JWT based authentication */

  const token = setUser(user); // Generate a JWT token for the user
  res.cookie("uid", token); // Set a cookie with the JWT token

  // Redirect to the home page after successful login
  return res.redirect("/");  
}

// Exporting the handleUserSignup and handleUserLogin functions
module.exports = {
  handleUserSignup,
  handleUserLogin,
};