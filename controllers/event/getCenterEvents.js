const selectCenterEvents = require("../../connections/service/events/selectCenterEvents");
const selectEventUsers = require("../../connections/service/events/selectEventUsers");

async function getCenterEvents(req, res) {
  const data = req.params;
  let users;
  // get users associated with the event

  //(!) Validation
  const events = await selectCenterEvents(data);

  console.log(events);

  if (events) {
    events.map(async (event) => {
      let user = await selectEventUsers({ id: event.id });
      users[event.id] = user;

      return (event.users = user);
    });
  }
  //(!) Universal manager -> model response
  events !== null
    ? res.status(200).json({ events, users })
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getCenterEvents;
