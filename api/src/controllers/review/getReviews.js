const { Reviews } = require("../../db");
const { Op } = require("sequelize");

const getReviews = async (req, res) => {
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
      if (filters.reviewID_filter) {
        queryOptions.where.reviewID = {
          [Op.eq]: filters.reviewID_filter,
        };
      }
      if (filters.orderID_filter) {
        queryOptions.where.orderID = {
            [Op.eq]: filters.orderID_filter,
        };
      }      
      if (filters.productID_filter) {
        queryOptions.where.productID = {
            [Op.eq]: filters.productID_filter,
        };
      }
      if (filters.status_filter) {
        queryOptions.where.status = {
          [Op.iLike]: `%${filters.status_filter}%`,
        };
      }
      if (filters.review_filter) {
        queryOptions.where.review = {
          [Op.iLike]: `%${filters.review_filter}%`,
        };
      }


      if (filters.date_order) {
        queryOptions.order.push(["date", filters.date_order.toUpperCase()]);
      }
    }

    const allReviews = await Reviews.findAndCountAll(queryOptions);
    return res.status(200).json(allReviews);
  } catch (error) {
    console.error("Error al obtener todos los pets:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getReviews;
