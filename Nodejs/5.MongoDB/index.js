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
    require: true,
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  jobTitle:{
    type: String
  }
}
);

// Model
const userModel = mongoose.model("user", userSchema);

