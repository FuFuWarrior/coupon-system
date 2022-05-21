'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupon.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discount_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    discount_limit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    items_limit:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    tableName: 'coupon',
    modelName: 'Coupon',
  });
  return Coupon;
};