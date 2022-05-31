const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Event = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "event",
  {
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    placeid: Sequelize.UUID,
    sportid: Sequelize.UUID,
    author: Sequelize.UUID,
    activity: Sequelize.STRING,
    accessibility: Sequelize.INTEGER,
    date: Sequelize.DATE,
  }
);

module.exports = Event;