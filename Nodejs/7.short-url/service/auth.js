// Create a map to store session IDs and their corresponding users
const sessionIdToUSerMap = new Map();

// Function to set a user in the map with a given session ID
function setUser(id, user) {
  sessionIdToUSerMap.set(id, user);
}

// Function to get a user from the map using a given session ID
function getUser(id) {
  return sessionIdToUSerMap.get(id);
}

// Export the setUser and getUser functions for use in other parts of the application
module.exports = {
  setUser,
  getUser,
}