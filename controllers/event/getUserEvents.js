const selectUserEvents = require("../../connections/service/events/selectUserEvents");

async function getUserEvents(req, res) {
  const data = req.params;

  //(!) Validation
  const template = await selectUserEvents(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getUserEvents;
