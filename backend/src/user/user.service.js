const bcrypt = require("bcrypt");
const {
  createUser,
  findUser,
  getUserById,
  deleteUserById,
  updateUserById,
} = require("./user.repository");

const registerNewUser = async (name, email, password) => {
  //check is the email taken
  const userFound = await findUser(email);
  if (userFound) {
    throw Error("Email Is Taken");
  }

  //create account
  const hashedPassword = await bcrypt.hash(password, 10);
  const data = {
    name,
    email,
    password: hashedPassword,
  };
  const newUser = await createUser(data);
  return newUser;
};

const loginUser = async (email, password) => {
  //check if user is found
  const userFound = await findUser(email);
  if (!userFound) {
    throw Error("Invalid Login Credentials");
  }
  //check the password
  const pw = await bcrypt.compare(password, userFound.password);
  if (!pw) {
    throw Error("Invalid Login Credentials");
  }

  return userFound;
};

const userById = async (id) => {
  const user = await getUserById(id);
  if (!user) {
    throw Error("User Not Found");
  }
  return user;
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  if (!user) {
    throw Error("User Not Found");
  }
  const deletedUser = await deleteUserById(id);
  return deletedUser;
};

const updateUser = async (id, data) => {
  const user = await getUserById(id);
  if (!user) {
    throw Error("User Not Found");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const dataBody = {
    name: data.name,
    email: data.email,
    password: hashedPassword,
  };
  const updatedUser = await updateUserById(id, dataBody);
  return updatedUser;
};

module.exports = {
  registerNewUser,
  loginUser,
  userById,
  deleteUser,
  updateUser,
};
