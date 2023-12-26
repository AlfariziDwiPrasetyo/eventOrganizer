const prisma = require("../db");
const User = prisma.user;

const createUser = async (data) => {
  const newUser = await User.create({
    data,
  });
  return newUser;
};

module.exports = { createUser };
