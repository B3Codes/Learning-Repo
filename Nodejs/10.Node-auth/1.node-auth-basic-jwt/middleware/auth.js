// JWT verification middleware

const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  // Step 3.1: Extract the token from the "Authorization" header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1] // Expected format: "Bearer <token>"

  if(!token) {
    return res.status(401).json({ message: "Missing token. Access denied."});
  }

  // Step 3.2: Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if(err) {
      return res.status(403).json({ message: "Invalid token. Access forbidden"});
    }

    // Step 3.3: Attach the decode user to the request.
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken};