// import express
const express = require('express');
const URL = require('../models/url');

// import router
const router = express.Router();

router.get('/', async (req, res) => {
  const allURLS = await URL.find({});
  return res.render("home", {
    urls: allURLS,
  });
})
module.exports = router;