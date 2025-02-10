// Main entry point
const express = require('express');
const bodyParser = require('express').json;
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
require('dotenv').config();

const app = express();

// STEP 1: Enable json parsing for incoming requests
app.use(bodyParser);

// Mount the routes
app.use('/api/auth',authRoutes);
app.use('/api',protectedRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
})

