/* eslint-disable linebreak-style */
const db = require('../db/models');

const OrderService = {
  async getOrder() {
    await db.Orders.findAll({
      include: [{
        model: db.Products,
        as: 'Order',
        require: false,
        attr: ['id', 'name', 'flavor', 'complement'],
        through: {
          model: db.ProductOrder,
          as: 'qtdProducts',
          attr: ['qtd'],
        },
      },
      {
        model: db.User,
        as: 'user',
        require: false,
        attr: ['name'],
      }],
    });
  },

  async listOrder(orderId) {
    await db.Orders.findOne({
      where: { id: orderId },
      include: [
        {
          model: db.Products,
          as: 'products',
          require: false,
          attr: ['id', 'name', 'flavor', 'complement'],
          through: {
            model: db.ProductOrder,
            as: 'qtdProducts',
            attr: ['qtd'],
          },
        },
        {
          model: db.User,
          as: 'user',
          required: false,
          attr: ['name'],
        },
      ],
    });
  },

  async getOrderProducts(orderId, productId) {
    await db.ProductOrder.findOne(
      { where: { order_id: orderId, product_id: productId } },
    );
  },

  async createOrder(orderData) {
    await db.Orders.create(orderData);
  },

  async createProductOrder(productOrderData) {
    await db.ProductOrder.create(productOrderData);
  },

  async updateOrder(orderId, orderUpdate) {
    await db.Orders.update(orderUpdate, {
      where: { id: orderId },
    });
  },

  async updateProductOrder(productId, orderId, productUpdate) {
    await db.ProductOrder.update(productUpdate, {
      where: { order_id: orderId, product_id: productId },
    });
  },

  async deleteProductOrder(orderId) {
    await db.ProductOrder.destroy({
      where: { order_id: orderId },
    });
  },

  async deleteOrder(orderId) {
    await db.Orders.destroy({
      where: { id: orderId },
    });
  },

};

module.exports = OrderService;
