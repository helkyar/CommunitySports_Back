const countUsers = require("../../connections/service/events/countUsers");
const selectCapacityEvent = require("../../connections/service/events/selectCapacityEvent");
const insertUserEvent = require("../../connections/service/users_events/insertUserEvent");

async function postUserEvents(req, res) {
  const data = req.body;

  const { count } = await countUsers(data);
  const { capacity } = await selectCapacityEvent(data);

  console.log(count, capacity);

  if (count >= capacity) {
    res.status(400).json({ error: "Operación no permitida" });
    return;
  }
  //(!) Validation
  const template = await insertUserEvent(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = postUserEvents;
