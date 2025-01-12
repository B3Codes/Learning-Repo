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
app.use(cors());

// adding prefix post to all the routes
app.use('/posts', postRoutes);  

const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.chq5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((Error) => console.log(Error.message));

// mongoose.set('useFindAndModify', false);