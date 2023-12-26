const bcrypt = require("bcrypt");
const prisma = require("../db");
const { createUser } = require("./user.repository");

const registerNewUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    name,
    email,
    password: hashedPassword,
  };
  const newUser = await createUser(data);
  return newUser;
};

const loginUser = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };
};

module.exports = { registerNewUser };
