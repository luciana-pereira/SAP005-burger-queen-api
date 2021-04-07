/* eslint-disable no-unused-vars *//* eslint-disable linebreak-style */
/* eslint-disable strict */
// eslint-disable-next-line lines-around-directive
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductOrder', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        references: { model: 'Orders', key: 'id' },
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
      },
      product_id: {
        references: { model: 'Products', key: 'id' },
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductOrder');
  },
};
