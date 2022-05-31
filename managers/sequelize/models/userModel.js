const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const User = sequelize.define(
  "users",
  {
    id:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    rol: Sequelize.STRING,
  }
);

module.exports = User;
