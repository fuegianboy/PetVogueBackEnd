const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Pets', {
    petID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.UUID, 
        allowNull: true,
        references: {
            model: 'Users',
            key: 'userID',
        },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    specie: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    castrated: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    vacRecord: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING, // validar link a cloudinary con regex
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },{timestamps:false});
};
