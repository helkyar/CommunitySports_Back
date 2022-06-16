const selectUserEvents = require("../../connections/service/events/selectUserEvents");

async function getUserEvents(req, res, next) {
  try {
    const data = req.params;
    const user = data.id;

    //(!) Validation
    const events = await selectUserEvents(data);

    if (events) {
      events.map(async (event) => {
        event.users = user;
        return event;
      });
    }
    //(!) Universal manager -> model response
    setTimeout(() => {
      events !== null
        ? res.status(200).json({ events })
        : res.status(404).json({ error: "Doesn't exist" });
    }, 1000);
  } catch (err) {
    next(err);
  }
}

module.exports = getUserEvents;
