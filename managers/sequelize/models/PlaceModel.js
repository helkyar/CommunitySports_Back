const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Place = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "place",
  {
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    room_number: Sequelize.INTEGER,
    accessibility: Sequelize.INTEGER,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT
  }
);

module.exports = Place;