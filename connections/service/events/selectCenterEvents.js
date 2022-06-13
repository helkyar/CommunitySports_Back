const Pool = require("../../getPool");

const selectCenterEvents = async () => {
  console.log("en selectCenterEvents");
  try {
    const allEvents = await Pool.query(`SELECT * FROM events`);
    console.log("eventos", allEvents.rows);
    return allEvents.rows;
  } catch (error) {
    console.log("selectCenterEvents");
    console.log(error);
    return false;
  }
};

module.exports = selectCenterEvents;
