/* eslint-disable linebreak-style */
// aqui vai o código que acessa o banco de dados
const userModel = require('../db/models/UserModel');

const usersReq = {
  getAllUser: async (res) => {
    try {
      const getAllUser = await userModel.userfindAll({
        attr: {
          exclude: ['password'],
        },
      });
      res.json(getAllUser);
    } catch (error) {
      console.log(error);
    }
  },

  createUsers: async (req, res) => {
    const {
      name, email, password, role, restaurant,
    } = req.body;
    try {
      const user = await userModel.create({
        name, email, password, role, restaurant,
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  getUserId: async (req, res) => {
    const uid = req.params.id;
    try {
      const user = await userModel.findAll({
        where: { uid },
        attr: { exclude: ['password'] },
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await userModel.update(
        { name: req.body.name },
        { where: { uid: req.params.id } },
      );
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  userDelete: async (req, res) => {
    try {
      await userModel.destroy({
        where: { uid: req.params.id },
      });
      res.send('Usuario excluido!');
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = { usersReq };
