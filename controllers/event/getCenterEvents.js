const selectCenterEvents = require("../../connections/service/events/selectCenterEvents");

async function getCenterEvents(req, res) {
  const data = req.params;

  //(!) Validation
  const template = await selectCenterEvents(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getCenterEvents;
