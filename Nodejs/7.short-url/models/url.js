// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the URL schema
const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true, // Ensure the short ID is unique
    },
    redirectUrl: {
      type: String,
      required: true, // Ensure the redirect URL is provided
    },
    visitHistory: [{ timestamp: { type: Number } }], // Array of visit history timestamps
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // Reference to the user who created the URL
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the URL model from the schema
const URL = mongoose.model("url", urlSchema);

// Export the URL model for use in other parts of the application
module.exports = URL;