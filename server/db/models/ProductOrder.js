/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      models.Orders.belongsToMany(models.Products, {
        through: 'ProductOrder',
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      models.Products.belongsToMany(models.Orders, {
        through: 'ProductOrder',
        foreignKey: 'productId',
        onDelete: 'CASCADE',
        hooks: true,
      });
    }
  }
  ProductOrder.init(
    {
      qtd: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'ProductsOrders' },
  );
  return ProductOrder;
};
