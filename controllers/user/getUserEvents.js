const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function getUserEvents(req, res) {
  console.log("Template controller get");
  const { userid } = req.params;

  //(!) Validation
  const template = await UserManager.findEvents({ id: userid });
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template[0])
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getUserEvents;
