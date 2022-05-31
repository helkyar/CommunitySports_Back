const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Comment = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "comment",
  {
    id:{
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    eventid: Sequelize.UUID,
    userid: Sequelize.UUID,
    comment:Sequelize.STRING,
  }
);

module.exports = Comment;