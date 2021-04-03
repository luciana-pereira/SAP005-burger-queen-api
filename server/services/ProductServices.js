/* eslint-disable linebreak-style */
const db = require('../db/models');

const ProductServices = {
  async getProducts() {
    await db.Products.findAll();
  },

  async getProductsId(productId) {
    await db.Products.findAll({
      where: { id: productId },
    });
  },

  async createProduct(productData) {
    await db.Products.create(productData);
  },

  async updateProduct(productId, productUpdate) {
    await db.Products.update(productUpdate, {
      where: { id: productId },
    });
  },

  async deleteProduct(productId) {
    await db.Products.destroy({
      where: { id: productId },
    });
  },
};

module.exports = ProductServices;
