/* eslint-disable linebreak-style */
const { Router } = require('express');
// const User = require('../controller/User');
// const Products = require('../controller/Products');
const Orders = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições || endpoints
// users
// router.get('/users', User.getUsers);
// router.get('/users/:uid', User.getUsersUid);
// router.post('/users', User.posttUsers);
// router.put('/users/:uid', User.putUsers);
// router.delete('/users/:uid', User.deleteUsers);

// products
// router.get('/products', Products.getProducts);
// router.get('/products/:productid', Products.getProductsId);
// router.post('/products', Products.postProducts);
// router.put('/products/:productid', Products.putProducts);
// router.delete('/products/:productid', Products.deleteProducts);

// orders
router.get('/', Orders);
router.get('/:orderId', Orders);
router.post('/', Orders.postOrders);
router.put('/:orderId', Orders);
router.delete('/:orderId', Orders);

module.exports = router;
