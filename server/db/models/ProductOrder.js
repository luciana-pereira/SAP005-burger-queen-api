/* eslint-disable linebreak-style */
/* eslint-disable lines-around-directive *//* eslint-disable strict */
/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {}
  }
  ProductOrder.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'ProductOrder' },
  );
  return ProductOrder;
};
