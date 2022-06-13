const selectAllEvents = require("../../connections/service/events/selectAllEvents");

async function getAllEvents(req, res) {
  console.log(" controller get AllEvents");

  //(!) Validation
  const data = await selectAllEvents();
  //(!) Universal manager -> model response
  console.log(data);
  data !== null
    ? res.status(200).json(data)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getAllEvents;
