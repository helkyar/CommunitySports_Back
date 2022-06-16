const deleteUserEvent = require("../../connections/service/users_events/deleteUserEvent");

async function postUserEvents(req, res, next) {
  try {
    const data = req.body;

    // Check if capacity < COUNT(users_events.id_user) where users_events.id_event = id_event;

    //(!) Validation
    const template = await deleteUserEvent(data);
    //(!) Universal manager -> model response
    template !== null
      ? res.status(200).json(template)
      : res.status(404).json({ error: "Doesn't exist" });
  } catch (err) {
    next(err)
  }

}

module.exports = postUserEvents;
