/* eslint-disable linebreak-style */
// /* eslint-disable prefer-destructuring *//* eslint-disable quote-props */
// /* eslint-disable consistent-return *//* eslint-disable linebreak-style */
// /* eslint-disable quotes */
const OrderService = require('../services/OrderServices');

const all = async (req, res) => {
  try {
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
    }));
    res.status(200).json(getOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const orderbyId = async (req, res) => {
  try {
    const orderId = req.params.id;
    const listOrder = await OrderService.listOrder(orderId);
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
    });
    res.status(201).json(orderList);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const createOrder = await OrderService.createOrder(req.body);
    const productOrder = req.body.product;
    OrderService.createOrder(productOrder);
    productOrder.forEach((product) => ({
      order_id: createOrder.id,
      product_id: product.product_id,
      qtd: product.qtd,
    }));
    res.status(201).json(productOrder, { message: 'pedido criado!!' });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const destroyOrder = async (req, res) => {
  try {
    const orderById = req.params.orderId;
    const order = await OrderService.orderId(orderById);
    if (order) {
      OrderService.deleteOrder(orderById);
      res.status(200).json({ message: 'Pedido deletado!' });
    }
  } catch (err) {
    res.json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const orderById = req.params.orderId;
    const order = await OrderService.updateOrder(orderById);
    const updateOrder = ({
      id: orderById,
      client_name: order.client_name,
      table: order.table,
      user_id: order.user_id,
      status: order.status,
    });
    res.status(200).json(updateOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = {
  all, orderbyId, create, update, destroyOrder,
};
