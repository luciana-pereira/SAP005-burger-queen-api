/* eslint-disable object-shorthand *//* eslint-disable linebreak-style */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
const ProductModel = require('../db/models');
const ProductService = require('../services/ProductServices');

const getProducts = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.status(200).json(products);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const getProductsId = async (req, res) => {
  try {
    const id = req.params.productid;
    const productByid = await ProductService.getProductsId(id);
    res.status(200).json(productByid);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const postProducts = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType,
    };
    await ProductService.createProduct(newProduct);
    res.status(201).json(newProduct, {
      message: 'produto criado !',
    });
  } catch (err) {
    res.status(400).json({
      message: 'erro, produto não criado',
    });
  }
};

const putProducts = async (req, res) => {
  try {
    const productUpdate = await ProductModel.Products.update({
      name: req.body.name,
      price: req.body.price,
      flavor: req.body.flavor,
      complement: req.body.complement,
      type: req.body.type,
      subType: req.body.subType,
    }, { where: { id: req.params.id } });
    res.status(200).json(productUpdate, { message: 'produto atualizado!' });
  } catch (err) {
    res.status(400).json({ message: 'erro produto não atualizado' });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { productid } = req.params;
    await ProductService.deleteProduct(productid);
    res.status(201).json({ message: 'produto excluido' });
  } catch (err) {
    res.status(400).json({ message: 'erro ao efetuar exclusão' });
  }
};

module.exports = {
  getProducts, getProductsId, postProducts, putProducts, deleteProducts,
};
