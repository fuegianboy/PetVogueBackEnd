const { Op } = require('sequelize');
const { Bookings, Orders, Users, Pets, Assets } = require('../../db');

const getBooking = async (req, res) => {

    try {

        const { filters, page, itemsPerPage } = req.body;

        const queryOptions = {
        where: {},
        include: [
            {
                model: Users,
                attributes: ['userID','firstName', 'lastName', 'email', `dni`, `systemRole`],
            },
            {
                model: Orders,
                attributes: ['orderID','date', 'type', 'amount', 'status'],
            },
            {
                model: Pets,
                attributes: ['petID', 'name', 'specie'],
            },
            {
                model: Assets,
                attributes: ['assetID', 'name', 'description','status', 'coordinator'],
            },
        ],
        order: [],
        limit: itemsPerPage,
        offset: 0,
        ...(page && {offset: (page - 1) * itemsPerPage})
        };

    
        if (filters) {
            if (filters.bookingID_filter) {
                queryOptions.where.bookingID = {
                    [Op.eq]: filters.bookingID_filter,
                }
            };
    
            if (filters.userID_filter) {
                queryOptions.where.userID = {
                    [Op.eq]: filters.userID_filter,
                };
            }

            if (filters.orderID_filter) {
                queryOptions.where.orderID = {
                    [Op.eq]: filters.orderID_filter,
                };
            }

            if (filters.petID_filter) {
                queryOptions.where.petID = {
                    [Op.eq]: filters.petID_filter,
                };
            }

            if (filters.assetID_filter) {
                queryOptions.where.assetID = {
                    [Op.eq]: filters.assetID_filter,
                };
            }

            if (filters.dateTime_filter) {
                queryOptions.where.dateTime = {
                    [Op.eq]: new Date(filters.date_Time), 
                };
            }

            if (filters.type_filter) {
                queryOptions.where.type = {
                    [Op.eq]: filters.type_filter,
                };
            }

            if (filters.systemRole_filter) {
                queryOptions.where.systemRole = {
                    [Op.eq]: filters.systemRole_filter,
                };
            }

            if (filters.User_lastName_filter) {
                queryOptions.include[0].where = {};
                queryOptions.include[0].where.lastName = {
                    [Op.iLike]: `%${filters.User_lastName_filter}%`,
                };
            }    
            
            if (filters.User_firstName_filter) {
                queryOptions.include[0].where = {};
                queryOptions.include[0].where.firstName = {
                    [Op.iLike]: `%${filters.User_firstName_filter}%`,
                };
            }
        
            if (filters.User_dni_filter) {
                queryOptions.include[0].where = {};
                queryOptions.include[0].where.dni = {
                    [Op.iLike]: `%${filters.User_dni_filter}%`,
                };
            }

            if (filters.Orders_orderID_filter) {
                queryOptions.include[1].where = {};
                queryOptions.include[1].where.orderID = {
                    [Op.iLike]: `%${filters.Order_orderID_filter}%`,
                };
            }

            if (filters.Pets_name_filter) {
                queryOptions.include[2].where = {};
                queryOptions.include[2].where.name = {
                    [Op.iLike]: `%${filters.Pets_name_filter}%`,
                };
            }

            if (filters.Assets_name_filter) {
                queryOptions.include[2].where = {};
                queryOptions.include[2].where.name = {
                    [Op.like]: `%${filters.Service_name_filter}%`,
                };
            }
        
            if (filters.Assets_coordinator_filter) {
                queryOptions.include[3].where = {};
                queryOptions.include[3].where.coordinator = {
                    [Op.iLike]: `%${filters.Assets_coordinator_filter}%`,
                };
            }

            //---------------- Orden --------------------//

            if (filters.dateTime_order) {
                queryOptions.order.push(['dateTime', filters.dateTime_order.toUpperCase()]);
            }

            if (filters.amount_order) {
                queryOptions.order.push(['amount', filters.amount_order])
            }

            if (filters.User_lastName_order){
                queryOptions.order.push([Users, "lastName", filters.User_lastName_order.toUpperCase()])
            }

        }

        const result = await Bookings.findAndCountAll(queryOptions);
    
        return res.status(200).json(result);
    }
    
    catch (error) {
        return res.status(500).json({ message: 'Error al obtener registros de Turnos', error: error.message });
    }

}

module.exports = {getBooking}
