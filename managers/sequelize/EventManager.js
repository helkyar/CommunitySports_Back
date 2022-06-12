const Manager = require("./Manager");
const Event = require("./models/EventModel");

module.exports = class EventManager extends Manager {
  static async findAll() {
    console.log('en event manager')
    return await this.executeQuery(Event, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Event, this.queries.find, [id]);
  }

  static async findValue(value) {
    params = { where: value };
    return await this.executeQuery(Event, this.queries.find, [params]);
  }

  static async create(params) {
    return await this.executeQuery(Event, this.queries.insert, [params]);
  }

  static async update({ activity, accessibility, date }, { id }) {
    const params = [
      { activity, accessibility, date },
      { where: { id }, returning: true },
    ];
    return await this.executeQuery(Event, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Event, this.queries.delete, [params]);
  }
};
