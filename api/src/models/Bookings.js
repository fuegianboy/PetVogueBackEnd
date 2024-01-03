const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Bookings", {
        bookingID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
        dateTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // Aca van las claves foráneas
        userID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        orderID: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'Orders',
                key: 'orderID',
            },
        },
        petID: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'Pets',
                key: 'petID',
            },
        },
        assetID: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Assets',
                key: 'assetID',
            },
        }
    },{timestamps: false})
};