const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Event = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "event",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    sportid: Sequelize.UUID,
    author: Sequelize.UUID,
    activity: {
      type: Sequelize.STRING,
      defaultValue: "user",
    },
    accessibility: Sequelize.INTEGER,
    date: Sequelize.DATE,
    sex: Sequelize.STRING,
    level: Sequelize.INTEGER,
    placeid: Sequelize.UUID,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
  }
);

module.exports = Event;
