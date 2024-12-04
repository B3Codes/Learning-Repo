const express = require('express');
const userModel = require('../models/user');
const router =  express.Router();

// const { } = require('../controllers/user');
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user');

router.route("/")
.post(handleCreateNewUser)
.get(handleGetAllUsers);

// get users by id
router.route("/:id").get(handleGetUserById)

// make chnages to existing user
.patch(handleUpdateUserById)

//  delete teh user
.delete( handleDeleteUserById);

module.exports = router;