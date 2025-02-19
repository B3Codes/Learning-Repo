const path = require('path');
const express = require('express');
const multer = require('multer');
// const upload = multer({dest: 'uploads/'})

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    // cb have two parameters: error anf folder where file need to be upload
    return cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
})

const upload = multer({storage});

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.urlencoded( {extended: false} ))
app.use(express.json());

app.get('/', (req, res) => {
  return res.render('homepage');
})

app.post('/profile', upload.single('profileImage'), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);

  return res.redirect('/');
})

app.listen(PORT, () => {
  console.log(`Server connected to PORT: ${PORT}`);
})