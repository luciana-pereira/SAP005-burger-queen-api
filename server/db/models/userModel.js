/* eslint-disable linebreak-style */
/* eslint-disable lines-around-directive *//* eslint-disable strict */
/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Orders, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
