const Pool = require("../../getPool");

const selectEventUsers = async ({ id }) => {
  console.log("en selectUserEvents");
  try {
    const allEvents = await Pool.query(
      `SELECT * FROM users_events INNER JOIN events ON events.id = users_events.id_event WHERE users_events.id_event = ${id}`
    );
    console.log("eventos", allEvents.rows);
    return allEvents.rows;
  } catch (error) {
    console.log("selectUserEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectEventUsers;
