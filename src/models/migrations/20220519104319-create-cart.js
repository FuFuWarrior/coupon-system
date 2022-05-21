'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      item_name: {
        type: DataTypes.STRING
      },
      item_price: {
        type: DataTypes.STRING
      },
      item_quantity: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('cart');
  }
};