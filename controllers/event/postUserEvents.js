const insertUserEvent = require("../../connections/service/users_events/insertUserEvent");

async function postUserEvents(req, res) {
  const data = req.body;

  // Check if capacity < COUNT(users_events.id_user) where users_events.id_event = id_event;

  //(!) Validation
  const template = await insertUserEvent(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = postUserEvents;
