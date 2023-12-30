const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY_JWT, { expiresIn: "3d" });
};

module.exports = generateToken;
