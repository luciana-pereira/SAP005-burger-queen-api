/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      // associação
      Orders.belongsToMany(models.Products, {
        through: 'ProductOrder',
        as: 'order',
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
        hooks: true,
      });
      Orders.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Orders.init({
    client_name: DataTypes.STRING,
    table: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
