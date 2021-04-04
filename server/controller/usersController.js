/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const { UserModel } = require('../db/models/UserModel');

const Users = {
  all: (req, res, next) => {
    UserModel.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create: (req, res, next) => {
    const {
      name, email, password, role, restaurant,
    } = req.body;

    const user = UserModel.create({
      name, email, password, role, restaurant,
    })
      .then((result) => {
        res.status(201).json(result);
        console.log(user);
      })
      .catch(next);
  },

  getUserId(req, res, next) {
    const uid = req.params.id;
    UserModel.findAll({
      where: { uid },
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  updateUser(req, res, next) {
    UserModel.update(
      { name: req.body.name },
      { where: { uid: req.params.id } },
    )
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  userDelete(req, res, next) {
    UserModel.destroy({
      where: { uid: req.params.id },
    })
      .then((result) => {
        res.status(201).json(result).send('Usuario excluido!');
      })
      .catch(next);
  },
};

module.exports = Users;
