const Manager = require("./Manager");
const schema = require("./schemas/userSchema");

module.exports = class UserManager extends Manager {
  static async create(user) {
    return await this.executeQuery(schema, this.querys.insert, [user]);
  }
  static async find({ id }) {
    return await this.executeQuery(schema, this.querys.find, [{ _id: id }]);
  }
  static async findAll() {
    return await this.executeQuery(schema, this.querys.findAll);
  }
  static async findName({ username }) {
    return await this.executeQuery(schema, this.querys.find, [{ username }]);
  }

  static async update(user, { id }) {
    const params = [{ _id: id }, user];
    return await this.executeQuery(schema, this.querys.update, params);
  }
  static async delete({ id }) {
    return await this.executeQuery(schema, this.querys.delete, [{ _id: id }]);
  }
};
