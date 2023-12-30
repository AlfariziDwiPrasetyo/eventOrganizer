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

const getUserById = async (id) => {
  const getUser = await User.findFirst({
    where: {
      id,
    },
  });
  return getUser;
};

const deleteUserById = async (id) => {
  const deleteUser = await User.delete({
    where: {
      id,
    },
  });
  return deleteUser;
};

const updateUserById = async (id, data) => {
  const updateUser = await User.update({ where: { id }, data });
  return updateUser;
};

module.exports = {
  createUser,
  findUser,
  getUserById,
  deleteUserById,
  updateUserById,
};
