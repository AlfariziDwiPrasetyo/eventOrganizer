const {
  getAllEvents,
  createEvent,
  getEventById,
  deleteEvent,
  updateEvent,
} = require("./event.repository");

const allEvents = () => {
  const events = getAllEvents();
  return events;
};

const findEventById = async (id) => {
  const event = await getEventById(id);
  if (!event) {
    throw Error("No Event Found");
  }
  return event;
};

const createNewEvent = async (data) => {
  const event = await createEvent(data);
  return event;
};

const updateEventById = async (id, data) => {
  await findEventById(id);
  const updatedEvent = await updateEvent(id, data);
  return updatedEvent;
};

const removeEvent = async (id) => {
  await findEventById(id);
  const deletedEvent = await deleteEvent(id);
  return deletedEvent;
};

module.exports = {
  allEvents,
  createNewEvent,
  findEventById,
  removeEvent,
  updateEventById,
};
