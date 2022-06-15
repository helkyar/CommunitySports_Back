const selectCenterEvents = require("../../connections/service/events/selectCenterEvents");
const selectEventUsers = require("../../connections/service/events/selectEventUsers");

async function getCenterEvents(req, res) {
  const data = req.params;
  let users = {};
  //(!) Validation
  const events = await selectCenterEvents(data);

  if (events) {
    events.map(async (event) => {
      let user = await selectEventUsers({ id: event.id });
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

module.exports = getCenterEvents;
