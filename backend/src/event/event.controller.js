const express = require("express");
const isLogin = require("../middlewares/isLogin");
const {
  allEvents,
  createNewEvent,
  findEventById,
  removeEvent,
  updateEventById,
} = require("./event.service");
const validateEventPost = require("../middlewares/validateEvent");
const upload = require("../middlewares/multerConfig");

const router = express.Router();

//get all event
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

//get one event
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await findEventById(id);
    res.status(200).json({
      event,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

//post event
router.post(
  "/post",
  isLogin,
  upload.single("banner"),
  validateEventPost,
  async (req, res, next) => {
    const id = req.user;
    const { name, description, address, date } = req.body;
    const banner = req.file.path;
    const data = {
      name,
      description,
      address,
      date,
      banner,
      authorId: id,
    };
    try {
      const event = await createNewEvent(data);
      console.log(event);
      res.status(200).json({
        event,
        status: "Success",
      });
    } catch (error) {
      next(new Error(error.message));
    }
  }
);

//update event
router.put("/:id", isLogin, async (req, res, next) => {
  const { id } = req.params;
  const { name, description, address, date } = req.body;
  const data = {
    name,
    description,
    address,
    date,
  };
  try {
    const updatedEvent = await updateEventById(id, data);
    res.status(200).json({
      updatedEvent,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

//delete event
router.delete("/:id", isLogin, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedEvent = await removeEvent(id);
    res.status(200).json({
      deletedEvent,
      status: "Success",
    });
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;
