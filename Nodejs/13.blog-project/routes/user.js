const { Router } = require('express');
const User = require('../models/user')


const router = Router();

// console.log('user route');

router.get('/login', (req, res) => {
  return res.render('signin');
})

router.post('/login', async (req, res) => {
  
  const {email, password} = req.body;
  
  // const user = await User.matchPassword(email, password);
  // console.log('user: ', user);
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    // console.log('token: ', token);
    return res.cookie('token', token).redirect('/');
  } catch (error) {
    return res.render('Signin',
      {error: "Incorrect Email or password"}
    )
  }
  
})

router.get('/signup', (req, res) => {
  return res.render('signup');
})

router.post('/signup', async (req, res) => {
  // console.log("req.body: ", req.body);
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password
  })

  return  res.redirect('/');
})

module.exports = router;
