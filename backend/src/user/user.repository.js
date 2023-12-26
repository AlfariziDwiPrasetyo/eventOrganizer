const prisma = require("../db");
const User = prisma.user;

const createUser = async (data) => {
  const newUser = await User.create({
    data,
  });
  return newUser;
};

const findUser = async (email) => {
  const userFound = await User.findFirst({
    where: {
      email,
    },
  });
  return userFound;
};

module.exports = { createUser, findUser };
