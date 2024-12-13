// import express
const express = require('express');

const { handleGenerateNewShortUrl, handleGetAnalytics } = require("../controllers/url")
// import router
const router = express.Router();

// route
router.post("/", handleGenerateNewShortUrl);

// route for analytics
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;