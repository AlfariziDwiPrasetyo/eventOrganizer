const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);
  const user = verifyToken(token);
  console.log({ user });
  req.user = user.id;
  console.log(req.user);
  if (!user) {
    next(new Error("Invalid token please login again"));
  } else {
    next();
  }
};

module.exports = isLogin;
