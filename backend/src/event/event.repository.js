const prisma = require("../db");
const Event = prisma.event;

const getAllEvents = () => {
  const events = Event.findMany();
  return events;
};

module.exports = getAllEvents;
