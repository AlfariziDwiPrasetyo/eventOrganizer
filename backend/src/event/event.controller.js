const express = require("express");
const allEvents = require("./event.repository");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const events = await allEvents();
    res.status(200).json({
      events,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
