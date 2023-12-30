const prisma = require("../db");
const Event = prisma.event;

const getAllEvents = () => {
  const events = Event.findMany();
  return events;
};

const createEvent = async (data) => {
  const event = await Event.create({ data });
  return event;
};

const getEventById = async (id) => {
  const event = await Event.findUnique({
    where: { id },
  });
  return event;
};

const deleteEvent = async (id) => {
  const deletedEvent = await Event.delete({ where: { id } });
  return deletedEvent;
};

const updateEvent = async (id, data) => {
  const updatedEvent = await Event.update({
    where: { id },
    data,
  });
  return updatedEvent;
};

module.exports = {
  getAllEvents,
  createEvent,
  getEventById,
  deleteEvent,
  updateEvent,
};
