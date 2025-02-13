const path = require("path");
const express = require("express");
const exp = require("constants");

const app = express();
const PORT = 8080;


app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

// handle and parse form data
app.use(express.urlencoded( { extended:false } ))
app.use(express.json());

app.get("/", (req, res) => {
  return res.render("homepage");
})

app.post("/upload", (req, res) => {

})


app.listen(PORT, () => console.log(`SERVER started at ${PORT}`));