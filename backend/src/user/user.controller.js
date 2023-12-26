const express = require("express");
const { registerNewUser } = require("./user.service");
const validateUser = require("../middlewares/validateUser");

const router = express.Router();

router.post("/registration", validateUser, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerNewUser(name, email, password);
    res.status(201).json({
      data: newUser,
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

module.exports = router;
