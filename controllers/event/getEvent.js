const selectEvent = require("../../connections/service/events/selectEvent");
const selectEventUsers = require("../../connections/service/events/selectEventUsers");

async function getEvent(req, res) {
  const data = req.params;

  // get users associated with the event

  //(!) Validation
  const event = await selectEvent(data);
  event.users = await selectEventUsers(data);
  //(!) Universal manager -> model response
  event !== null
    ? res.status(200).json({ event })
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getEvent;
