const { getUser } = require('../service/auth.js')

/*
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

*/

/* Authorization and Authentication */


// async function restrictToLoggedinUserOnly(req, res, next) {
//   const userUid = req.headers['Authorization'];

//   console.log(req.headers);

//   if(!userUid) return res.redirect('/login');
//   const token = userUid.split("Bearer ")[1];
//   const user = await getUser(token);

//   if(!user) return res.redirect('/login');

//   req.user = user;

//   next();

// }

// async function checkAuth(req, res, next) {
//   console.log(req.headers);
//   const userUid = req.headers['authorization'];
//   const token = userUid.split("Bearer ")[1];

//   const user = await getUser(token);

//   next();
// }



// // Exporting the middleware functions
// module.exports = {
//   restrictToLoggedinUserOnly,
//   checkAuth,
// }



// Authorization 

function checkForAuthentication(req, res, next) {
  const authorizationHeaderValue = req.headers['authorization'];
  res.user = null;

  if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer')) {
    return next();
  }
  
}