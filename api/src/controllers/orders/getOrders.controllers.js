const { Op } = require('sequelize');
const { Orders, Users, Products, Services } = require('../../db');

const getOrder = async (req, res) => {

    try {

        const { filters } = req.body;

        const queryOptions = {
        where: {},
        include: [
            {
                model: Users,
                attributes: ['firstName', 'lastName', 'email'],
            },
            {
                model: Products,
                attributes: ['name', 'description', 'type', 'price', 'status', 'stock',],
            },
            {
                model: Services,
                attributes: ['name', 'description', 'category', 'price', 'status', 'petID'],
            },
        ],
        order: [],
        };

    
        if (filters) {
            if (filters.orderID_filter) {
                queryOptions.where.orderID = {
                    [Op.eq]: filters.orderID_filter,
                }
            };
    
            if (filters.userID_filter) {
                queryOptions.where.userID = {
                    [Op.eq]: filters.userID_filter,
                };
            }

            if (filters.productID_filter) {
                queryOptions.where.productID = {
                    [Op.eq]: filters.productID_filter,
                };
            }

            if (filters.serviceID_filter) {
                queryOptions.where.serviceID = {
                    [Op.eq]: filters.serviceID_filter,
                };
            }

            if (filters.date_filter) {
                queryOptions.where.date = {
                    [Op.eq]: new Date(filters.date_filter), 
                };
            }

            if (filters.type_filter) {
                queryOptions.where.type = {
                    [Op.eq]: filters.type_filter,
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

            if (filters.Product_name_filter) {
                queryOptions.include[1].where = {};
                queryOptions.include[1].where.name = {
                    [Op.iLike]: `%${filters.Product_name_filter}%`,
                };
            }

            if (filters.Product_description_filter) {
                queryOptions.include[1].where = {};
                queryOptions.include[1].where.description = {
                    [Op.iLike]: `%${filters.Product_description_filter}%`,
                };
            }

            if (filters.Service_name_filter) {
                queryOptions.include[2].where = {};
                queryOptions.include[2].where.name = {
                    [Op.like]: `%${filters.Service_name_filter}%`,
                };
            }
        
            if (filters.Service_description_filter) {
                queryOptions.include[2].where = {};
                queryOptions.include[2].where.description = {
                    [Op.iLike]: `%${filters.Service_description_filter}%`,
                };
            }

            if (filters.Service_petID_filter) {
                queryOptions.include[2].where = {};
                queryOptions.include[2].where.petID = {
                    [Op.like]: `%${filters.Service_petID_filter}%`,
                };
            }

            if (filters.date_order) {
                queryOptions.order.push(['date', filters.date_order.toUpperCase()]);
            }

            if (filters.amount_order) {
                queryOptions.order.push(['amount', filters.amount_order])
            }

            if (filters.User_firstName_order){
                queryOptions.order.push([Users, "firstName", filters.User_firstName_order.toUpperCase()])
            }

        }

        const result = await Orders.findAll(queryOptions);
    
        return res.status(200).json(result);
    }
    
    catch (error) {
        return res.status(500).json({ message: 'Error al obtener registros de Orders', error: error.message });
    }

}

module.exports = {getOrder}
