/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const UserModel = require('../db/models');
const { UserService } = require('../services/UserServices');

const all = async (req, res) => {
  try {
    const user = await UserService.getUsers();
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant,
    };
    const user = await UserService.createUsers(newUser);
    res.status(201).json(user, { message: 'usuario criado!' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getUserId = async (req, res) => {
  try {
    const uid = req.params.id;
    const userId = await UserService.getUserId(uid);
    res.status(201).json(userId);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      restaurant: req.body.restaurant,
    }, { where: { id: req.params.id } });
    res.status(201).json(user, { message: 'usuario atualizafo' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const userDelete = async (req, res) => {
  try {
    const iduser = req.params.id;
    const user = await UserService.destroy(iduser);
    res.status(200).json(user, { message: 'Usuario excluido!' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  all, createUser, getUserId, updateUser, userDelete,
};
