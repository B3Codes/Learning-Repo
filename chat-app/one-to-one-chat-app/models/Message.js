const mongoose = require('../server/node_modules/mongoose');

const messageSchema =  new mongoose.Schema({
  from: { type: String, required: true},
  to: {type: String, required: true},
  message: {type: String, required: true},
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', messageSchema);