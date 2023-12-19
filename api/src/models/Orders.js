const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const UserServices = sequelize.define('Orders', {
        orderID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        userID: {
            type: DataTypes.UUID, 
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID',
            },
        },
        productID: {
            type: DataTypes.UUID, 
            allowNull: true,
            references: {
                model: 'Products',
                key: 'productID',
            },
        },
        serviceID: {
            type: DataTypes.UUID, 
            allowNull: true,
            references: {
                model: 'Services',
                key: 'serviceID',
            },
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isWithinRange(value) {
                    if (value < 0 && value > 11) {
                        throw new Error('Valuation should be between 1 and 10.');
                    }
                },
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isGreaterThanZero(value) {
                    if (value <= 0) {
                        throw new Error('Quantity should be more than zero.');
                    }
                },
            }
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isGreaterThanZero(value) {
                    if (value <= 0) {
                        throw new Error('Price should be more than zero.');
                    }
                },
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        currency_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mp_payment_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mp_status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mp_merchant_order_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mp_external_reference: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },{timestamps:false})
};