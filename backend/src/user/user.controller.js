const express = require("express");
const {
  registerNewUser,
  loginUser,
  userById,
  deleteUser,
  updateUser,
} = require("./user.service");
const {
  validateUserLogin,
  validateUserRegistration,
} = require("../middlewares/validateUser");
const generateToken = require("../utils/generateToken");
const verifyToken = require("../utils/verifyToken");
const isLogin = require("../middlewares/isLogin");

const router = express.Router();

router.post(
  "/registration",
  validateUserRegistration,
  async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
      const newUser = await registerNewUser(name, email, password);
      res.status(201).json({
        data: newUser,
        status: "Success",
      });
    } catch (error) {
      next(new Error(error.message));
    }
  }
);

router.post("/login", validateUserLogin, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(200).json({
      status: "Success",
      token: generateToken(user.id),
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

router.get("/profile", isLogin, async (req, res, next) => {
  const id = req.user;
  try {
    const user = await userById(parseInt(id));
    res.json({
      user,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

router.put("/update", isLogin, async (req, res, next) => {
  const id = req.user;
  const { name, email, password } = req.body;
  const data = {
    name,
    email,
    password,
  };
  try {
    const updatedUser = await updateUser(id, data);
    res.status(200).json({
      updatedUser,
      message: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

router.delete("/delete", isLogin, async (req, res, next) => {
  const id = req.user;
  try {
    const deletedUser = await deleteUser(id);
    res.status(200).json({
      deletedUser,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
