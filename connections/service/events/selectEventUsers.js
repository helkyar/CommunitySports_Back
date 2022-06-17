const Pool = require("../../getPool");

const selectEventUsers = async (id) => {
  console.log("en selectUserEvents", id.data.id);
  const myID = id.data.id // <== Alguien tendra que explicarme esto
  try {
    const allEvents = await Pool.query(
      `SELECT * FROM users_events INNER JOIN events ON events.id = users_events.id_event WHERE users_events.id_event = '${myID}'`
    );
    return allEvents.rows;
  } catch (error) {
    console.log("selectUserEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectEventUsers;
