const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


// Middleware
app.use(cors())// allow cross-origin request
app.use(express.json()) // parse json request bodies

// Test route
app.get('/', (req, res) => {
  res.send("Backend is running...");
});

// starts server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})