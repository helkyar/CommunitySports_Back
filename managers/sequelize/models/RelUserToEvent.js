const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const User_Event = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "user_event",
  {
    // sportid: Sequelize.UUID,
    // placeid: Sequelize.UUID,
    added: Sequelize.DATE,
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
  }
);

module.exports = User_Event;