const { Services } = require('../../db');
const { Op } = require('sequelize');

const getServices = async (req, res) => {
  try {
    const { filters } = req.body;

    const queryOptions = {
      where: {},
      order: [],
    };

    if (filters) {
      if (filters.serviceID_filter) {
        queryOptions.where.serviceID = {
          [Op.eq]: filters.serviceID_filter,
        };
      }

      if (filters.name_filter) {
        queryOptions.where.name = {
          [Op.like]: `%${filters.name_filter}%`,
        };
      }

      if (filters.description_filter) {
        queryOptions.where.description = {
          [Op.like]: `%${filters.description_filter}%`,
        };
      }

      if (filters.category_filter) {
        queryOptions.where.category = {
          //[Op.like]: `%${filters.category_filter}%`,
          [Op.in]: filters.category_filter,
        };
      }

      if (filters.animalType_filter) {
        queryOptions.where.animalType = {
          //[Op.eq]: filters.animalType_filter,
          [Op.in]: filters.animalType_filter,
        };
      }

      if (filters.price_order) {
        queryOptions.order.push(['price', filters.price_order.toUpperCase()]);
      }

      if (filters.status_order) {
        queryOptions.order.push(['status', filters.status_order.toUpperCase()]);
      }
    }

    const result = await Services.findAll(queryOptions);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving Services records', error: error.message });
  }
};

module.exports = {
  getServices,
};