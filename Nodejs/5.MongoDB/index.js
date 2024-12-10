const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("../MOCK_DATA.json");
const app = express();
const PORT = 8000;


//  connection
mongoose.connect("mongodb://127.0.0.1:27017/mongoDB-app-1")
.then(() => {console.log("MongoDB connected!")})
.catch((err)=> {console.log("Mongo Error: ", err)});

// schema 

const userSchema = mongoose.Schema(
  {firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  jobTitle:{
    type: String
  }
}, {timestamps: true}
);

// Model
const userModel = mongoose.model("user", userSchema);

// Middleware - Plugin
app.use(express.urlencoded({extended:false}));
app.use(express.json());  // Middleware for parsing JSON request bodies

app.post("/api/users", async (req, res) => {
  const body = req.body
  console.log(body);
  if(
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({msg: "All fields are required!"});
  }

  const result = await userModel.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle
  })
  
  return res.status(201).json({msg: "Success!"})

})


app.get("/users", async (req, res) => {
  const allDbUsers = await userModel.find({});
  const html = `
    <ul>
      ${allDbUsers
        .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
        .join("")
      }
    </ul>
  `;
  res.send(html);
})


// get all users

app.get("/api/users", async (req, res) => {
  const allDbUsers = await userModel.find({})

  res.header("X-Name", "ABD"); // custom header

  return res.json(allDbUsers)
})


// get users by id
app.route("/api/users/:id").get(async (req, res) => {
  const user = await userModel.findById(req.params.id)
  console.log(user);
  if(!user){
    return res.status(400).json({error: "user not found!"})
  }
  return res.json(user);

})

// make chnages to existing user
.patch(async (req, res) => {
  const body = req.body;
  const user = await userModel.findByIdAndUpdate(req.params.id, {lastName: body.lastName})
  // if(!user){
  //   return res.status(400).json({error: "user not found!"})
  // }

  return res.json("success!")
})

.delete( async (req, res) =>{
  await userModel.findByIdAndDelete(req.params.id)
  return res.json("Success!")
})


// app.route("api/users/:id").get(async (req, res) => {
//   const user = await userModel.findById(req.params.id);
//   if(!user){
//     return res.status(400).json({error: "user not found!"})
//   }
//   return res.json(user);
// })







// // Routes
// app.get("/users", (req, res) => {
//   return "/users";
// });

// app.get("/api/users", (req, res) => {
//   return "/api/users";
// })

// app.post("/api/users", (req, res) =>{
//   res.json({status:"Success!", updatedUser});
// })


app.listen(8000, () => console.log("Server Started!"));