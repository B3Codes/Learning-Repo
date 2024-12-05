// import express
const express = require('express');

const { handleGenerateNewShortUrl } = require("../controllers/url")
// import router
const router = express.Router();

// route
router.post("/", handleGenerateNewShortUrl);

module.exports = router;