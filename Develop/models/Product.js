// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: Datatype.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name:{
      type:Datatype.STRING,
      allowNull: false,
    },
    stock: {
      type: Datatype.INTEGER,
      allowNull:false,
      defualtValue:10,
      validate: {
        isNumeric:true,
      },
    },
    price: {
      type:Datatype.INTEGER,
      allowNull:false,
    },
    category_id: {
      type: Datatype.INTEGER,
      references: {
        model:'category',
        key: 'id'
      },
    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
