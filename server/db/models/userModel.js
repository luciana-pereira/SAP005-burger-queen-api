/* eslint-disable linebreak-style */
/* eslint-disable lines-around-directive *//* eslint-disable strict */
/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: 'user_id',
      });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
