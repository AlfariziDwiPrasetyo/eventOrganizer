const getAllEvents = require("./event.repository");

const allEvents = () => {
  const events = getAllEvents();
  return events;
};

module.exports = allEvents;
