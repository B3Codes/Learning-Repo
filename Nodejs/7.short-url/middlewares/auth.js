const { getUser } = require('../service/auth.js')

// Middleware to restrict access to logged-in users only
async function restrictToLoggedinUserOnly(req, res, next) {
  // Extract the user ID from cookies
  const uid = req.cookies?.uid;

  // If no user ID is found in cookies, redirect to the login page
  if (!uid) {
    return res.redirect('/login');
  }

  // Get the user by ID (assuming getUser is a function that retrieves the user)
  const user = getUser(uid);

  // If no user is found, redirect to the login page
  if (!user) {
    return res.redirect('/login');
  }

  // Set the user in the request object
  req.user = user;

  // Proceed to the next middleware or route handler
  next();
}

// Middleware to check authentication using cookies
async function checkAuth(req, res, next) {
  // Extract the user ID from cookies
  const uid = req.cookies?.uid;
  
  // Get the user by ID (assuming getUser is a function that retrieves the user)
  const user = getUser(uid);

  // Set the user in the request object
  req.user = user;

  // Proceed to the next middleware or route handler
  next();
}

// Exporting the middleware functions
module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
}