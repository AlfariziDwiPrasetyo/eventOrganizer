const bcrypt = require("bcrypt");
const { createUser, findUser } = require("./user.repository");

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

module.exports = { registerNewUser, loginUser };
