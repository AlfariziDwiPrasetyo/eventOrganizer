const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);
  const user = verifyToken(token);

  req.user = user.id;

  if (!user) {
    next(new Error("Invalid token please login again"));
  } else {
    next();
  }
};

module.exports = isLogin;
