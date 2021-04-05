/* eslint-disable max-len *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars *//* eslint-disable consistent-return */
const express = require('express');

const User = require('./User');
const Products = require('./Products');
const Orders = require('./Orders');
const Auth = require('./Auth');

const router = express.Router();

router.use('/login', Auth);
router.use('/users', User);
router.use('/products', Products);
router.use('/orders', Orders);

module.exports = router;
