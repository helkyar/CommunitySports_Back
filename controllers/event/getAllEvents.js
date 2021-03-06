const selectAllEvents = require("../../connections/service/events/selectAllEvents");

async function getAllEvents(req, res, next) {
  try {
    //(!) Validation
    const data = await selectAllEvents();
    //(!) Universal manager -> model response
    data !== null
      ? res.status(200).json(data)
      : res.status(404).json({ error: "Doesn't exist" });
  } catch (err) {
    next(err)
  }
}

module.exports = getAllEvents;
