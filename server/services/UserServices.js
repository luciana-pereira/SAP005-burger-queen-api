/* eslint-disable linebreak-style */
const db = require('../db/models');

const UserServices = {
  async getUsers() {
    await db.User.findAll({
      raw: true,
      attr: { exclude: ['password'] },
    });
  },

  async getUsersId(userId) {
    await db.User.findOne({
      raw: true,
      where: { id: userId },
      attr: { exclude: ['password'] },
    });
  },

  async createUsers(data) {
    await db.User.create(data);
  },

  async deleteUsers(userid) {
    await db.destroy({ where: { id: userid } });
  },
};

module.export = UserServices;
