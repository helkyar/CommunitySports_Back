const Manager = require("./Manager");
const Place = require("./models/PlaceModel");

module.exports = class PlaceManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Place, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Place, this.queries.find, [id]);
  }

  static async findValue(value) {
    params = { where: value };
    return await this.executeQuery(Place, this.queries.find, [params]);
  }

  static async create(params) {
    return await this.executeQuery(Place, this.queries.insert, [params]);
  }

  static async update({ room_number, accessibility }, { id }) {
    const params = [
      { room_number, accessibility },
      { where: { id }, returning: true },
    ];
    return await this.executeQuery(Place, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Place, this.queries.delete, [params]);
  }
};
