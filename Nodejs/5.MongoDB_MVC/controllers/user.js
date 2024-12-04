const userModel = require('../models/user')

async function handleGetAllUsers(req, res) {
  const allDBUsers = await userModel.find({});
  return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
  const user = await userModel.findById(req.params.id)
  console.log(user);
  if(!user){
    return res.status(400).json({error: "user not found!"})
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  const body = req.body;
  const user = await userModel.findByIdAndUpdate(req.params.id, {lastName: body.lastName})
  return res.json("success!")
}

async function handleDeleteUserById(req, res) {
  await userModel.findByIdAndDelete(req.params.id)
  return res.json("Success!")
}

async function handleCreateNewUser(req, res) {
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
  
  return res.status(201).json({msg: "Success!", id: result._id})
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
}