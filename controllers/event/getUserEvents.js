const selectUserEvents = require("../../connections/service/events/selectUserEvents");

async function getUserEvents(req, res) {
  const data = req.params;
  const user = data.id;

  //(!) Validation
  const events = await selectUserEvents(data);
  //(!) Universal manager -> model response
  events !== null
    ? res.status(200).json({ events, user })
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getUserEvents;
