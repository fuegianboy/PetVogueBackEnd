const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Assets', {
    assetID: {
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
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coordinator: {
      type: DataTypes.STRING,
      allowNull: true,
  },
  },{timestamps:false});
};