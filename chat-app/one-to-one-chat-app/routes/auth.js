const express = require('../server/node_modules/express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('../server/node_modules/bcryptjs');
const jwt = require('../server/node_modules/jsonwebtoken');
const {body, validationResult} = require('../server/node_modules/express-validator');

// Middleware to protect routes by verifying token
const authMiddleware = (req, res, next) => {
const token = req.header('x-auth-token'); // 
if(!token) return res.status(401).json({msg: 'No token. authorization denied'});
try {
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode.user;
  next();
} catch(error) {
  console.log("token error: ", error);
  res.status(401).json({msg: 'Token is not valid'});
}
}

// user registration
router.post('/register',
  [
    body('userName', 'Username is required').notEmpty(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  async(req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const {userName, password} = req.body;
    
    let user = await User.findOne({userName});
    if(user) return res.status(400).json({msg: 'User already exists'});

    user = new User({userName, password});
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    console.log("user: ", user);

    const payload = { user: {id: user.id, userName: user.userName }};
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    )
  } catch(error) {
    console.log("error: ", error);
    res.status(500).send('Server Error');
  }
})

// user login
router.post('/login',
  [
    body('userName', 'Username is required').notEmpty(),
    body('password', 'Password is required').notEmpty(),
  ],
 async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { userName, password } = req.body;

  try {
       
    const user = await User.findOne({userName});

    if(!user) return res.status(400).json({msg: 'Invalid credentials. User doesn\'t exists.'});

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(400).json({msg: "Invalid credentials. "});

    const payload = { user: {id: user.id, userName: user.userName}};
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {expiresIn: 3600},
      (err, token) => {
        if(err) throw err;
        res.json({token});
      }
    );

  } catch(error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
})

// get current user (for maintaining login across tabs)
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch(error) {
    console.log('Get user error: ',error);
    res.status(500).send('Server Error');
  }
})
module.exports = router;