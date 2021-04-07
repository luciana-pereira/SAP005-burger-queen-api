/* eslint-disable linebreak-style */
const { Router } = require('express');
const Products = require('../controller/productsController');

const router = Router();
router.get('/', Products.getProducts);
router.get('/:id', Products.getProductsId);
router.post('/', Products.postProducts);
router.put('/:id', Products.putProducts);
router.delete('/:id', Products.deleteProducts);

module.exports = router;
