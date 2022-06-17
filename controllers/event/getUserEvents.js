const selectUserEvents = require("../../connections/service/events/selectUserEvents");

async function getUserEvents(req, res, next) {
  try {
    const data = req.params;
    const user = data.id;

    //(!) Validation
    const events = await selectUserEvents(user);

    if (!events) {
      const error = new Error('No events')
      error.statusCode = 404;
      throw error
    }

    console.log({ events });

    //(!) Universal manager -> model response
    events !== null
      ? res.status(200).json({ events })
      : res.status(404).json({ error: "Doesn't exist" });
  } catch (err) {
    next(err);
  }
}

module.exports = getUserEvents;
