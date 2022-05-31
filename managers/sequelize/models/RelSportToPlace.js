const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Sport_Place = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "sport_place",
  {
    // sportid: Sequelize.UUID,
    // placeid: Sequelize.UUID,
  }
);

module.exports = Sport_Place;