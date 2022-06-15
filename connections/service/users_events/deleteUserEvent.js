const Pool = require("../../getPool");

const insertUserEvent = async ({ id_user, id_event }) => {
  try {
    await Pool.query(
      `DELETE FROM users_events WHERE id_user = '${id_user}' AND id_event = '${id_event}')`
    );
  } catch (error) {
    console.log("insertCenterEvent");
    console.log(error);
  }
};

module.exports = insertUserEvent;
