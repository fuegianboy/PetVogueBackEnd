const { Op } = require('sequelize');
const { Users } = require('../../db');

const getUsers = async (req, res) => {
  try {
    const { filters, page, itemsPerPage } = req.body;

    const queryOptions = {
      where: {},
      order: [],
      limit: itemsPerPage,
      offset: 0,
      ...(page && {offset: (page - 1) * itemsPerPage})
    };
    
    if (filters) {
      if (filters.userID_filter) {
        queryOptions.where.userID = {
          [Op.eq]: filters.userID_filter,
        };
      }

      if (filters.lastName_filter) {
        queryOptions.where.lastName = {
          [Op.iLike]: `%${filters.lastName_filter}%`,
        };
      }
      if (filters.firstName_filter) {
        queryOptions.where.firstName = {
          [Op.iLike]: `%${filters.firstName_filter}%`,
        };
      }

      if (filters.date_order) {
        queryOptions.order.push(['date', filters.date_order]);
      }

      if (filters.firstName_order) {
        queryOptions.order.push(["firstName", filters.firstName_order.toUpperCase()]);
      }
    
    }

    const result = await Users.findAndCountAll(queryOptions);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving Users records', error: error.message });
  }
};

module.exports = {
    getUsers
};
