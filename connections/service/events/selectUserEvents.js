const Pool = require("../../getPool");

const selectUserEvents = async ({ id }) => {
  console.log("en selectUserEvents");
  try {
    const allEvents = await Pool.query(`SELECT * FROM events`);
    console.log("eventos", allEvents.rows);
    return allEvents.rows;
  } catch (error) {
    console.log("selectUserEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectUserEvents;
