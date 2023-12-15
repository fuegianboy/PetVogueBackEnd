const { Op } = require('sequelize');
const { Products } = require('../../db');

const getProduct = async (req, res) => {
  try {
    const { filters } = req.body;

    const queryOptions = {
      where: {},
      order: [],
    };
    
    if (filters) {
      if (filters.name_filter) {
        queryOptions.where.name = {
          [Op.eq]: filters.name_filter,
        };
      }

      if (filters.type_filter) {
        queryOptions.where.type = {
          [Op.like]: `%${filters.type_filter}%`,
        };
      }
      if (filters.status_filter) {
        queryOptions.where.status = {
          [Op.like]: `%${filters.status_filter}%`,
        };
      }

      if (filters.price_order) {
        queryOptions.order.push(['price', filters.price_order]);
      }

      
    
    }

    const result = await Products.findAll(queryOptions);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
  }
};

module.exports = {
    getProduct
};
