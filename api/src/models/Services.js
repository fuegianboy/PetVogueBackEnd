const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Services', {
    serviceID: {
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
    category: {
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
    status: {
        type: DataTypes.STRING,
        defaultValue: "enabled",
        allowNull: false,
    },
  },{timestamps:false});
};