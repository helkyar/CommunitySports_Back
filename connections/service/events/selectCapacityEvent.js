const Pool = require("../../getPool");

const selectCapacityEvent = async ({ id_event }) => {
  try {
    const event = await Pool.query(
      `SELECT capacity FROM events WHERE id = '${id_event}'`
    );
    return event.rows[0];
  } catch (error) {
    console.log("selectEventWithDirection");
    console.log(error);
    return false;
  }
};

module.exports = selectCapacityEvent;
