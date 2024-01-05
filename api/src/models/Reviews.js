const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Reviews', {
    reviewID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    orderID: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'orderID',
        },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },{timestamps:false});
};