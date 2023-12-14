const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Products', {
    productID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false, // validar por regex link a image
    },    
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },{timestamps:false});
};