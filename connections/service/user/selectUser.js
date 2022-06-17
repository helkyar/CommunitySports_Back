const Pool = require("../../getPool");

const selectUser = async ({ email, password }) => {
  try {
    const sport = await Pool.query(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    );
    return sport.rows[0];
  } catch (error) {
    console.log("selectSportByName");
    console.log(error);
    return false;
  }
};

module.exports = selectUser;
