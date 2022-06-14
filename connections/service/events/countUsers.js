const Pool = require("../../getPool");

const countUsers = async ({ id_event }) => {
  try {
    const event = await Pool.query(
      `SELECT COUNT(id_user) FROM users_events WHERE id_event = '${id_event}'`
    );
    return event.rows[0];
  } catch (error) {
    console.log("selectEventWithDirection");
    console.log(error);
    return false;
  }
};

module.exports = countUsers;
