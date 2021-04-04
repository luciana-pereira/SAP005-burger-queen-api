/* eslint-disable linebreak-style */
const { Router } = require('express');
// const User = require('../controller/User');
// const Products = require('../controller/Products');
const Orders = require('../controller/OrdersController');

const router = Router();

router.get('/', Orders.all);
router.get('/:orderId', Orders.orderbyId);
router.post('/', Orders.create);
router.put('/:orderId', Orders.update);
router.delete('/:orderId', Orders.destroyOrder);

module.exports = router;
