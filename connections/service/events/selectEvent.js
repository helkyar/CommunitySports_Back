const Pool = require("../../getPool");

const selectEventWithDirection = async ({ id }) => {
  try {
    const event = await Pool.query(`SELECT * FROM events WHERE id = '${id}'`);
    return event.rows[0];
  } catch (error) {
    console.log("selectEventWithDirection");
    console.log(error);
    return false;
  }
};

module.exports = selectEventWithDirection;
