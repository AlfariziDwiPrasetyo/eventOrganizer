const jwt = require("jsonwebtoken");
const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY_JWT, (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;
