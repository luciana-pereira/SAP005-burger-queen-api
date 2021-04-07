/* eslint-disable linebreak-style */
const { Router } = require('express');
// const User = require('../controller/User');
// const Products = require('../controller/Products');
const Orders = require('../controller/ordersController');

const router = Router();

router.get('/', Orders.all);
router.get('/:id', Orders.orderbyId);
router.post('/', Orders.create);
router.put('/:id', Orders.update);
router.delete('/:id', Orders.destroyOrder);

module.exports = router;
