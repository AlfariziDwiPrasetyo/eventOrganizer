const express = require("express");
const { registerNewUser, loginUser } = require("./user.service");
const {
  validateUserLogin,
  validateUserRegistration,
} = require("../middlewares/validateUser");

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
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
