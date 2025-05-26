const JWT = require('jsonwebtoken');

const secret = '$uper$ecret!23';

// this function takes user object and generates a token fpr user object
function createTokenForUser(user) {
  // create a payload
  const payload = {
    _id: user._id,
    email: user.email,
    profileImageURL: user.profileImage,
    role: user.role,
  };

  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
}