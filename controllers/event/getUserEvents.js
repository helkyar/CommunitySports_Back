const selectUserEvents = require("../../connections/service/events/selectUserEvents");

async function getUserEvents(req, res) {
  const data = req.params;
  const user = data.id;

  //(!) Validation
  const events = await selectUserEvents(data);

  if (events) {
    events.map(async (event) => {
      return (event.users = user);
    });
  }
  //(!) Universal manager -> model response
  setTimeout(() => {
    events !== null
      ? res.status(200).json({ events })
      : res.status(404).json({ error: "Doesn't exist" });
  }, 1000);
}

module.exports = getUserEvents;
