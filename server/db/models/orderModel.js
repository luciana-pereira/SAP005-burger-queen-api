/* eslint-disable linebreak-style */
/* eslint-disable-next-line linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi *//* eslint-disable lines-around-directive */
/* eslint-disable strict *//* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
'use strict'
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // associação
      Orders.belongsToMany(models.Products, {
        through: 'ProductOrder',
        as: 'Products',
        foreignKey: 'order_id',
        otherKey: 'product_id',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING,
    processedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
