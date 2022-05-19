'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    item_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    item_price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false
    },
    item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cart',
    modelName: 'Cart',
  });
  return Cart;
};