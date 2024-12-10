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
  return res.json({status:"success!", user: user})
}

async function handleDeleteUserById(req, res) {
  const user = await userModel.findByIdAndDelete(req.params.id)
  if(!user){
    return res.json("User Not Found!")
  }
  return res.json({status: "Success!", msg: user+" deleted successfully!"});
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