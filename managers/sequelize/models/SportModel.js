const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Sport = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "sport",
  {
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    category: Sequelize.STRING,
    name: Sequelize.STRING,
    player_number: Sequelize.INTEGER,
    team_number: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
  }
);

module.exports = Sport;