require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const Users = require("./models/Users")
// const Products = require("./models/Products")

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false, 
      native: false, 
   }
);

// Users(sequelize)
// Products(sequelize)

const models = sequelize.models;

// relacion User - UserProducts - Products
// models.Users.hasMany(models.UserProducts, { foreignKey: 'userID' });
// models.UserProducts.belongsTo(models.Users, { foreignKey: 'userID' });

// models.Products.hasMany(models.UserProducts, { foreignKey: 'productID' });
// models.UserProducts.belongsTo(models.Products, { foreignKey: 'productID' });

module.exports = {
   ...sequelize.models,
   conn: sequelize, 
};
