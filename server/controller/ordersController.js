/* eslint-disable prefer-destructuring */
/* eslint-disable quote-props */
/* eslint-disable consistent-return *//* eslint-disable linebreak-style */
/* eslint-disable quotes */
// aqui vai o código que acessa o banco de dados
//
const OrderService = require('../services/OrderServices');
const UserService = require('../services/ProductServices');
const ProductServices = require('../services/ProductServices');

const OrderController = {
  async allOrder(req, res, next) {
    try {
      const getOrder = await OrderService.getOrder();
      const getOrderTemplate = getOrder.map((order) => ({
        "orderId": order.id,
        "employee": order.user.name,
        "employee_id": order.user_id,
        "client_name": order.client_name,
        "table": order.table,
        "status": order.status,
        "createAt": order.createAt,
        "updateAt": order.updateAt,
        "products": order.produts.map((product) => ({
          "id": product.id,
          "name": product.name,
          "qtd": product.productOrder.qtd,
          "flavor": product.flavor,
          "complement": product.complement,
        })),
      }));
      res.status(200).json(getOrderTemplate);
    } catch (error) {
      next(error);
    }
  },

  async orderbyId(req, res, next) {
    try {
      const orderId = req.params.orderId;
      const listOrder = await OrderService.listOrder(orderId);
      const orderList = {
        "order_id": listOrder.id,
        "employee": listOrder.user.name,
        "employee_id": listOrder.user_id,
        "client_name": listOrder.client_name,
        "table": listOrder.table,
        "status": listOrder.status,
        "createdAt": listOrder.createdAt,
        "updatedAt": listOrder.updatedAt,
        "products": listOrder.produts.map((product) => ({
          "id": product.id,
          "name": product.name,
          "qtd": product.productOrder.qtd,
          "flavor": product.flavor,
          "complement": product.complement,
        })),
      };
      res.status(200).json(orderList);
    } catch (error) {
      next(error);
    }
  },

  async create(req, res) {
    try {
      const createOrder = await Order.createOrder(req.body);
      let productOrder = req.body.product;
      productOrder = productOrder.map((product) => ({
        orderId: createOrder.id,
        productId: product.id,
        qtd: product.qtd,
      }));
      await Order.createOrder(productOrder);
      res.status(201).json({ message: 'pedido criado!!' });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async destroyOrder(req, res) {
    try {
      const orderById = req.params.orderId;
      const order = await Order.orderId(orderById);
      if (order) {
        await Order.deleteOrder(orderById);
        res.status(200).json({ message: 'Pedido deletado!' });
      } else {
        return;
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async update(req, res) {
    try {
      const orderById = req.params.orderId;
      const newstatus = req.body.status;
      const order = await Order.updateOrder(orderById);

      if (order) {
        await Order.updateOrder(orderById, newstatus);
        res.status(204).json({ message: 'pedido atualizado' });
      } else {
        return res.json({ message: 'error' });
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
module.exports = OrderController;
