const Pool = require("../../getPool");

const selectCenterEvents = async ({ id }) => {
  console.log("en selectCenterEvents");
  console.log(id);
  try {
    const allEvents = await Pool.query(
      `SELECT * FROM events LEFT JOIN centers_events ON centers_events.id_event = events.id WHERE centers_events.id_center = '${id}'`
    );
    console.log("eventos", allEvents.rows);
    return allEvents.rows;
  } catch (error) {
    console.log("selectCenterEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectCenterEvents;
