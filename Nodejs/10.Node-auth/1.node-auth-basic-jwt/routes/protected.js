const express = require('express');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// GET: /api/dashboard
router.get('/dashboard', authenticateToken, (req, res) => {
  // The middleware guarantees that the req.user is present
  res.json({ message: `Welcome ${req.user.name} to the dashboard. You have accessed the protected route` });
})

module.exports = router;
