const Manager = require("./Manager");
const User = require("./models/UserModel");
const Event = require("./models/EventModel");

module.exports = class UserManager extends Manager {
  static async create(params) {
    return await this.executeQuery(User, this.queries.insert, [params]);
  }
  static async findName({ username }) {
    const params = { where: { username } };
    return await this.executeQuery(User, this.queries.findName, [params]);
  }

  static async find({ id }) {
    const params = [{ where: { id }, include: Event }];
    return await this.executeQuery(User, this.queries.findAllOf, params);
  }
};
