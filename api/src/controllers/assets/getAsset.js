const { Assets } = require('../../db');
const { Op } = require('sequelize');

const getAsset = async (req, res) => {
  try {
    const { filters } = req.body;

    const queryOptions = {
      where: {},
      order: [],
    };

    if (filters) {
      if (filters.assetID_filter) {
        queryOptions.where.assetID = {
          [Op.eq]: filters.assetID_filter,
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

      if (filters.status_filter) {
        queryOptions.where.status = {
          [Op.like]: `%${filters.status_filter}%`,
        };
      }

      if (filters.coordinator_filter) {
        queryOptions.where.coordinator = {
          [Op.eq]: filters.coordinator_filter,
        };
      }

      if (filters.name_order) {
        queryOptions.order.push(['name', filters.name_order.toUpperCase()]);
      }

      if (filters.coordinator_order) {
        queryOptions.order.push(['coordinator', filters.coordinator_order.toUpperCase()]);
      }
    }

    const result = await Assets.findAll(queryOptions);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error al traer datos de los Recursos', error: error.message });
  }
};

module.exports = {
  getAsset,
};