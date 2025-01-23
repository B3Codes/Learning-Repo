// Import required modules
const shortid = require('shortid');
const URL = require('../models/url');

// Function to handle generating a new short URL
async function handleGenerateNewShortUrl(req, res) {
  const body = req.body; // Extract the request body
  console.log(req.user); // Log the user information for debugging

  // Check if the URL is provided in the request body
  if (!body.url) {
    return res.status(400).json({ error: "url is required" }); // Return a 400 error if URL is not provided
  }

  // Generate a short ID for the URL
  const shortID = shortid();

  // Create a new URL document in the database
  await URL.create({
    shortId: shortID, // Set the short ID
    redirectUrl: body.url, // Set the redirect URL
    visitHistory: [], // Initialize the visit history as an empty array
    createdBy: req.user._id, // Set the user ID of the creator
  });

  // Render the home view with the generated short ID
  return res.render("home", {
    id: shortID,
  });

  // return res.json({ id: shortID }); // Optionally return the short ID as JSON
}

// Function to handle getting analytics for a short URL
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId; // Extract the short ID from the request parameters
  const result = await URL.findOne({ shortId }); // Find the URL document by short ID

  // Return the total clicks and visit history as JSON
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

// Export the functions for use in other parts of the application
module.exports = {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
};