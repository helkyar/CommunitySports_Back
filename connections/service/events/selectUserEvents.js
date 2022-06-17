const Pool = require("../../getPool");

const selectUserEvents = async (id) => {
  console.log("en selectUserEvents");
  console.log(id);
  const query = `SELECT * FROM events INNER JOIN users_events ON events.id = users_events.id_event WHERE users_events.id_user = '${id}'`
  try {
    const allEvents = await Pool.query(query);
    console.log({ allEvents });
    console.log({ query });
    console.log("eventos", allEvents.rows);
    return allEvents.rows;
  } catch (error) {
    console.log("selectUserEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectUserEvents;
