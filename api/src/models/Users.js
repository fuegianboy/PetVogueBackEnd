const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    userID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // validar por regex
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true, // validar por regex o usar con outzero, no va aca
    },
    systemRole: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ["usuario"],
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true, // validar x regex
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },    
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birth: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "enabled",
        allowNull: false,
    },
    favoriteProducts: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      defaultValue: [],
      allowNull: true,
    },    
    favoriteServices: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      defaultValue: [],
      allowNull: true,
    },
    cart: {
      type: DataTypes.ARRAY(DataTypes.UUID),
      defaultValue: [],
      allowNull: true,
    },
    cart2: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      defaultValue: [],
      allowNull: true,
    },
  },{timestamps:false});
};
