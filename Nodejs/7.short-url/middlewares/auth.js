const { getUser } = require('../service/auth.js')

async function restrictToLoggedinUserOnly(req, res, next) {
  const uid = req.cookies.uid;

  if(!uid) {
    return res.redirect('/login');
  }

  const user = getUser(uid);

  if(!user) {
    return res.redirect('/login');
  }

  res.user = user;

  next();

}

module.exports = {
  restrictToLoggedinUserOnly,
}