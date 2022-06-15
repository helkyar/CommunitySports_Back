const Pool = require("../../getPool");

const insertUserEvent = async ({ id_user, id_event }) => {
  try {
    await Pool.query(`INSERT INTO users_events (id_user, id_event)
VALUES('${id_user}', '${id_event}')`);
  } catch (error) {
    console.log("insertCenterEvent");
    console.log(error);
  }
};

module.exports = insertUserEvent;
