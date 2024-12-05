const express = require('express');
const urlRoute = require('./routes/url')
const { connectToMongoDB } = require('./connection')

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("connected Successfuly!"))

app.use("/url",urlRoute);

app.listen(PORT, () => console.log(`Server started at port &{PORT}`));
