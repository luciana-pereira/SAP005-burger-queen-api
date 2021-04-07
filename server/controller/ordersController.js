/* eslint-disable camelcase *//* eslint-disable linebreak-style */
// /* eslint-disable prefer-destructuring *//* eslint-disable quote-props */
// /* eslint-disable consistent-return *//* eslint-disable linebreak-style */
// /* eslint-disable quotes */
const db = require('../db/models');

const all = async (req, res) => {
  await db.Orders.findAll({
    include: [
      {
        model: db.Products,
        as: 'Products',
        required: false,
        attr: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'img',
          'type',
          'sub_type',
        ],
        through: {
          model: db.ProductOrder,
          as: 'ProductOrder',
          attr: ['amount'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.json({ message: err.message }));
};

const orderbyId = async (req, res) => {
  await db.Orders.findAll({
    where: { id: req.params.id },
    include: [
      {
        model: db.Products,
        as: 'Products',
        required: false,
        attr: [
          'id',
          'name',
          'price',
          'flavor',
          'complement',
          'img',
          'type',
          'sub_type',
        ],
        through: {
          model: db.ProductOrder,
          as: 'ProductOrder',
          attr: ['amount'],
        },
      },
    ],
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.json({ message: err.message }));
};

const create = async (req, res) => {
  const {
    user_id, client_name, status, table, processedAt,
  } = req.body;
  await db.Orders.create({
    user_id, client_name, status, table, processedAt,
  })
    .then((result, err) => {
      // eslint-disable-next-line array-callback-return
      req.body.products.map((product) => {
        const productItem = db.Products.findByPk(product.id);
        const orderItens = {
          order_id: result.id,
          product_id: product.id,
          amount: product.amount,
        };
        db.ProductOrder.create(orderItens);
        if (!productItem) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(200).json(result);
        }
      });
    })
    .catch((err) => res.status(400).json({ message: err.message }));
};

const destroyOrder = async (req, res) => {
  await db.Orders.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result, { message: 'Pedido deletado!' });
    })
    .catch((err) => res.json({ message: err.message }));
};

const update = async (req, res) => {
  const {
    user_id, client_name, status, table,
  } = req.body;
  await db.Orders.update({
    user_id, client_name, status, table,
  }, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result, { message: 'atualização realizada com sucesso!' });
    })
    .catch((err) => {
      res.json({ message: err.message });
    });
};

module.exports = {
  all, orderbyId, create, update, destroyOrder,
};
