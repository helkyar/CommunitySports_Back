const Manager = require("./Manager");
const Sport = require("./models/SportModel");

module.exports = class SportManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Sport, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Sport, this.queries.find, [id]);
  }

  static async findValue(value) {
    params = { where: value };
    return await this.executeQuery(Sport, this.queries.find, [params]);
  }

  static async create(params) {
    return await this.executeQuery(Sport, this.queries.insert, [params]);
  }

  static async update({ category, name, player_number, team_number }, { id }) {
    const params = [
      { category, name, player_number, team_number },
      { where: { id }, returning: true },
    ];
    return await this.executeQuery(Sport, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Sport, this.queries.delete, [params]);
  }
};
