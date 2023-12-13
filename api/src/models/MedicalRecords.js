const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('MedicalRecords', {
    medicalRecordID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    petID: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
            model: 'Pets',
            key: 'petID',
        },
    },
    serviceID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    practiceType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    practiceName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    practiceDetail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
  },{timestamps:false});
};