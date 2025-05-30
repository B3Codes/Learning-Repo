const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRoute = require('./routes/user');
const { checkForAuthentication } = require('./middlewares/authentication');

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication)

mongoose.connect("mongodb://127.0.0.1:27017/blogify")
.then((e) => console.log('Mongodb connected'))
.catch((e) => console.log(e));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));



app.get('/', (req, res) => {
  res.render('home');
})

// console.log('index route');
app.use('/user', userRoute);

app.listen(PORT, ()=> {
  console.log(`Server is running on PORT: ${PORT}`);
})


