/* eslint-disable max-len *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars *//* eslint-disable consistent-return */
const { Router } = require('express');

const User = require('./User');
const Products = require('./Products');
const Orders = require('./Orders');
const Auth = require('./Auth');

const router = Router();

router.use('/login', Auth);
router.use('/users', User);
router.use('/products', Products);
router.use('/orders', Orders);

router.use((next) => {
  const err = new Error('rota não localizada ');
  err.status = 404;
  next(err);
});

router.use((err, res) => {
  res.status(err.status || 500);
  return res.send({ erro: { mensage: err.mensage } });
});

module.exports = router;
