const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('References', {
    referenceID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'enabled',
    }
  },{timestamps:false});
};