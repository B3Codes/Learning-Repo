//* stateful authentication */
// // Create a map to store session IDs and their corresponding users
// const sessionIdToUSerMap = new Map();

// // Function to set a user in the map with a given session ID
// function setUser(id, user) {
//   sessionIdToUSerMap.set(id, user);
// }

// // Function to get a user from the map using a given session ID
// function getUser(id) {
//   return sessionIdToUSerMap.get(id);
// }

// // Export the setUser and getUser functions for use in other parts of the application
// module.exports = {
//   setUser,
//   getUser,
// }


/* JWT based authentication */
const jwt = require('jsonwebtoken'); // Importing the jsonwebtoken library
const secret = '$IndiaIndia@1183'; // Secret key for JWT
function setUser(user) {
  return jwt.sign({
    _id: user._id,
    email: user.email,
  }, secret) // Generate a JWT token for the user
}

function getUser(token) {
  if(!token) return null; // If no token is provided, return null

   try {
    return jwt.verify(token, secret); // Verify the token and return the user
  } catch (error) {
    console.error('Token verification failed:', error.message); // Log the error for debugging
    return null; // Return null if token verification fails
  }
}

// Export the setUser and getUser functions for use in other parts of the application
module.exports = { 
  setUser,
  getUser,
}