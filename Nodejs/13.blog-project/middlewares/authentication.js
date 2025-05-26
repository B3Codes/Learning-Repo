const { validateToken } = require('../services/authentication');

function checkForAuthentication(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if(!tokenCookieValue) {
      return next();
    }

    try {
      const payload = validateToken(tokenCookieValue);
    } catch(error) {

    }
    next();
  };
}

module.exports = {
  checkForAuthentication,
}