import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

// // this means every route in posts will start with url posts instead of /. 
// // i.e localhost:5000/posts , instead of localhost:5000/
// router.get('/', (req, res) => {
//   res.send('THIS WORKS!')
// });


//  routes with controller
router.get('/', getPosts)

// router.post('/', (req, res) => {
//   // Handle the incoming data here
//   res.status(201).json({ message: 'Post created successfully' });
// });

router.post('/', createPost);

export default router;