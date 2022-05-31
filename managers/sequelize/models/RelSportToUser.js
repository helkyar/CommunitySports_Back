const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Sport_User = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "sport_user",
  {
    // sportid: Sequelize.UUID,
    // placeid: Sequelize.UUID,
    level: Sequelize.INTEGER,
  }
);

module.exports = Sport_User;