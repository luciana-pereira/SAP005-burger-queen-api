/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */ 
/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
const db = require('../db/models');

const getProducts = async (req, res) => {
  await db.Products.findAll().then((result) => {
    res.status(200).json(result);
  })
    .catch((err) => res.json({ message: err.message }));
};

const getProductsId = async (req, res) => {
  await db.Products.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.json({ message: err.message }));
};

const postProducts = async (req, res) => {
  const {
    name, price, flavor, complement, type, sub_type,
  } = req.body;
  await db.Products.create({
    name, price, flavor, complement, type, sub_type,
  })
    .then((result) => { res.status(201).json(result, { message: 'produto criado !' }); })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const putProducts = async (req, res) => {
  const {
    name, price, flavor, complement, type, sub_type, 
  } = req.body;
  await db.Products.update({
    name, price, flavor, complement, type, sub_type, 
  }, { where: { id: req.params.id } })
    .then((result) => res.status(200).json(result, { message: 'produto atualizado!' }))
    .catch((err) => { res.status(400).json({ message: err.message }); });
};

const deleteProducts = async (req, res) => {
  await db.Products.destroy({ where: { id: req.params.id } })
    .then((result) => { res.status(201).json(result, { message: 'produto excluido' }); })
    .catch((err) => { res.status(400).json({ message: err.message }); });
};

module.exports = {
  getProducts, getProductsId, postProducts, putProducts, deleteProducts,
};
