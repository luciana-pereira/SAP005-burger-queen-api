/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
const Product = require('../db/models/ProductModel');

const Products = {
  getProducts: (req, res, next) => {
    Product.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch(next);
  },

  getProductsId: (req, res, next) => {
    const id = req.params.productid;
    // eslint-disable-next-line no-self-compare
    Product.findAll({
      where: { id },
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  postProducts: (req, res, next) => {
    const {
      name,
      price,
    } = req.body;

    Product.create({ name, price })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  putProducts: (req, res, next) => {
    Product.update(
      { name: req.body.name },
      { price: req.body.price },
      { where: { id: req.params.id } },
    )
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  deleteProducts: (req, res, next) => {
    Product.destroy({
      where: { id: req.params.id },
    })
      .then((result) => {
        res.status(201).json(result).send('Produto excluido!');
      })
      .catch(next);
  },
};

module.exports = Products;
