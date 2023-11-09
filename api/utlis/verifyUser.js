const jwt = require('jsonwebtoken');
const catchError = require('./error');

const verifyToken = (req, res, next) => {
  let token;
   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
   }

  if (!token) return next(catchError(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(catchError(403, "something went wrong in token verification"));

    req.user = user;
    next();
  });
};

module.exports = verifyToken;