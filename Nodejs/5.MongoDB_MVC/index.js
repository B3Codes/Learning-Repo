const express = require("express");
const { connectMongoDb} = require("./connection");
const { logReqRes } = require('./middlewares');
const userRouter = require('./routes/user')

const app = express();
const PORT = 8000;

//  connection
connectMongoDb('mongodb://127.0.0.1:27017/mongoDB-app-1');

// Middleware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(express.json());  // Middleware for parsing JSON request bodies

app.use(logReqRes('log.txt'));



app.use('/users', userRouter)

app.listen(8000, () => console.log("Server Started!"));