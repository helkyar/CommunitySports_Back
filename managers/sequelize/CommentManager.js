const Manager = require("./Manager");
const Comment = require("./models/CommentModel");

module.exports = class CommentManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Comment, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Comment, this.queries.find, [id]);
  }

  static async findValue(value) {
    params = { where: value };
    return await this.executeQuery(Comment, this.queries.find, [params]);
  }

  static async create(params) {
    return await this.executeQuery(Comment, this.queries.insert, [params]);
  }

  static async update({ comment }, { id }) {
    const params = [
      { comment },
      { where: { id }, returning: true },
    ];
    return await this.executeQuery(Comment, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Comment, this.queries.delete, [params]);
  }
};
