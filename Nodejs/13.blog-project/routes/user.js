const { Router } = require('express');
const User = require('../models/user')


const router = Router();

// console.log('user route');

router.get('/login', (req, res) => {
  return res.render('signin');
})

router.get('/signup', (req, res) => {
  return res.render('signup');
})

router.post('/signup', async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password
  })

  return  res.redirect('/');
})

module.exports = router;
