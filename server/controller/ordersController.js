/* eslint-disable linebreak-style */
// /* eslint-disable prefer-destructuring *//* eslint-disable quote-props */
// /* eslint-disable consistent-return *//* eslint-disable linebreak-style */
// /* eslint-disable quotes */
const OrderService = require('../services/OrderServices');

const OrderController = {
  all(req, res, next) {
    const getOrder = OrderService.getOrder();
    getOrder.map((order) => ({
      orderId: order.id,
      employee: order.user.name,
      employee_id: order.user_id,
      client_name: order.client_name,
      table: order.table,
      status: order.status,
      createAt: order.createAt,
      updateAt: order.updateAt,
      products: order.produts.map((product) => ({
        id: product.id,
        name: product.name,
        qtd: product.productOrder.qtd,
        flavor: product.flavor,
        complement: product.complement,
      })),
    }))
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },

  orderbyId(req, res, next) {
    const orderId = req.params.id;
    const listOrder = OrderService.listOrder(orderId);
    const orderList = ({
      order_id: listOrder.id,
      employee: listOrder.user.name,
      employee_id: listOrder.user_id,
      client_name: listOrder.client_name,
      table: listOrder.table,
      status: listOrder.status,
      createdAt: listOrder.createdAt,
      updatedAt: listOrder.updatedAt,
      products: listOrder.produts.map((product) => ({
        id: product.id,
        name: product.name,
        qtd: product.productOrder.qtd,
        flavor: product.flavor,
        complement: product.complement,
      })),
    })
      .then((result) => {
        res.status(201).json(orderList);
        console.log(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const createOrder = OrderService.createOrder(req.body);
    const productOrder = req.body.product;
    OrderService.createOrder(productOrder);
    productOrder.forEach((product) => ({
      order_id: createOrder.id,
      product_id: product.product_id,
      qtd: product.qtd,
    }))
      .then((result) => {
        res.status(201).json(result, { message: 'pedido criado!!' });
      })
      .catch(next);
  },

  destroyOrder(req, res) {
    const orderById = req.params.orderId;
    const order = OrderService.orderId(orderById);
    if (order) {
      OrderService.deleteOrder(orderById);
      res.status(200).json({ message: 'Pedido deletado!' });
    }
  },

  update(req, res, next) {
    const orderById = req.params.orderId;
    const order = OrderService.updateOrder(orderById);
    const updateOrder = ({
      id: orderById,
      client_name: order.client_name,
      table: order.table,
      user_id: order.user_id,
      status: order.status,
    })
      .then(() => {
        res.status(200).json(updateOrder);
      })
      .catch(next);
  },
};
module.exports = OrderController;
