'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('coupon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      code: {
        type: DataTypes.STRING
      },
      is_valid: {
        type: DataTypes.BOOLEAN
      },
      discount_type: {
        type: DataTypes.STRING
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
      discount_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      items_limit: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('coupon');
  }
};