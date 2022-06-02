const EventManager = require(`../../${process.env.MANAGER}/EventManager`);

async function getEvents(req, res) {
  console.log("Template controller get");
  const data = req.query;

  const keys = ["sex"];
  let values = {};
  keys.forEach((key) => {
    if (data[key] !== undefined) {
      values[key] = data[key];
    }
  });

  console.log("================================================");
  console.log(values);
  console.log(data);

  //(!) Validation
  const template = await EventManager.findValue(values);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template[0])
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getEvents;
