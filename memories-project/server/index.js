import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


// this means every route in posts will start with url posts instead of /. 
// i.e localhost:5000/posts , instead of localhost:5000/

// middlewares

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for all routes

// Adding prefix /posts to all the routes in postRoutes
app.use('/posts', postRoutes);  

// MongoDB connection URL
const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.chq5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Define the port number, use environment variable if available, otherwise default to 5000
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) // Start the server if connection is successful
  .catch((Error) => console.log('MongoDB connection error:', 'MongoDB connection error:', Error.message)); // Log any connection errors

// mongoose.set('useFindAndModify', false); // Disable deprecated MongoDB findAndModify function