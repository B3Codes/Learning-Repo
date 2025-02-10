// Login route

/*
  What’s Happening Here:
  - User Lookup: Searches for a user in an in‑memory array.
  - Password Check: Uses bcrypt to compare the provided password with the stored hash.
  - JWT Creation: Creates a token that includes user details. The token is signed with a secret and set to expire in 1 hour.
  - Response: The token is sent back in JSON format.
*/

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const router = express.Router();


// In-memory user "database" for demonstration purposes.
// Password is pre-hashed (the plain text for testing is "password123").
const users = [
  {
    id: 1,
    username: 'alice',
    // password: 'password123'
    password: '$2a$10$BpT6Rczs3wD9c/40o8X7Z.VPRcPhNffHic8Hy7vZcD3oEPIZiH6dS',
    roles: ['user']
  }
];


// POST api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // step 2.1 find the user
  const user = users.find(u => u.username === username);
  
  if(!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // step 2.2 validate the password using bcrypt
  const validPswd = await bcrypt.compare(password, user.password);
  if(!validPswd) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  // step 2.3 Build the JWT payload
  const payload = {
    id:user.id,
    username: user.username,
    roles: user.roles
  }

  // step 2.4 Sign the token with the secret key and expiration time
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

  // step 2.5 Send the token in the response / Response the token to the client
  res.json({ token });
})

module.exports = router;