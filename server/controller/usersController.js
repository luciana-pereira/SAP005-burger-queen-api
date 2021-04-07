/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const db = require('../db/models');
// User
const all = async (req, res) => {
  await db.User.findAll()
    .then((result) => { res.status(200).json(result); })
    .catch((err) => res.json({ message: err.message }));
};

const createUser = async (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  db.User.create({
    name, email, password, role, restaurant,
  })
    .then((result) => { res.status(201).json(result, { message: 'usuario criado!' }); })
    .catch((err) => res.json({ message: err.message }));
};

const getUserId = async (req, res) => {
  await db.User.findAll({ where: { id: req.params.id } })
    .then((result) => { res.status(201).json(result); })
    .catch((err) => res.json({ message: err.message }));
};

const updateUser = async (req, res) => {
  const {
    name, email, password, role, restaurant,
  } = req.body;
  await db.User.update({
    name, email, password, role, restaurant,
  }, { where: { id: req.params.id } })
    .then((result) => res.status(201).json(result, { message: 'usuario atualizado' }))
    .catch((err) => { res.json({ message: err.message }); });
};

const userDelete = async (req, res) => {
  await db.User.destroy({ where: { id: req.params.id } })
    .then(() => { res.status(200).json(user, { message: 'Usuario excluido!' }); })
    .catch(() => res.json({ message: err.message }));
};

module.exports = {
  all, createUser, getUserId, updateUser, userDelete,
};
