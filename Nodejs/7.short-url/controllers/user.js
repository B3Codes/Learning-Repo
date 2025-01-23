const {v4: uuidv4} = require('uuid');
const User = require('../models/users.js'); // Importing the User model
const { setUser } = require('../service/auth.js');

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
  return res.redirect("/");
}

// Function to handle user login
async function  handleUserLogin(req, res){
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if(!user) {
    return res.render("login",{ 
      error: "Invalid email or password",
    });
      
  }

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
  

}

// Exporting the handleUserSignup function
module.exports = {
  handleUserSignup,
  handleUserLogin,
};