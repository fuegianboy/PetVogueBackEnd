require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const Users = require("./models/Users")
const Reviews = require("./models/Reviews")
const Products = require("./models/Products")
const MedicalRecords = require("./models/MedicalRecords")
const Orders = require("./models/Orders")
const Pets = require("./models/Pets")
const Services = require("./models/Services")

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

Users(sequelize)
Reviews(sequelize)
Products(sequelize)
MedicalRecords(sequelize)
Orders(sequelize)
Pets(sequelize)
Services(sequelize)

const models = sequelize.models;

// relacion Users - Pets
models.Users.hasMany(models.Pets, { foreignKey: 'userID' });
models.Pets.belongsTo(models.Users, { foreignKey: 'userID' });

// relacion Pets - MedicalRecords
models.Pets.hasMany(models.MedicalRecords, { foreignKey: 'petID' });
models.MedicalRecords.belongsTo(models.Pets, { foreignKey: 'petID' });

// relacion User - Orders - Products - Services
models.Users.hasMany(models.Orders, { foreignKey: 'userID' });
models.Orders.belongsTo(models.Users, { foreignKey: 'userID' });

models.Products.hasMany(models.Orders, { foreignKey: 'productID', allowNull: true });
models.Orders.belongsTo(models.Products, { foreignKey: 'productID', allowNull: true });

models.Services.hasMany(models.Orders, { foreignKey: 'serviceID', allowNull: true });
models.Orders.belongsTo(models.Services, { foreignKey: 'serviceID', allowNull: true });

// relacion Orders - Reviews
models.Orders.hasOne(models.Reviews, { foreignKey: 'orderID' });
models.Reviews.belongsTo(models.Orders, { foreignKey: 'orderID' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
