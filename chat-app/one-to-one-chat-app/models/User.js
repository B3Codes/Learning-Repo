const mongoose = require('../server/node_modules/mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);