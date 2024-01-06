const { Pets } = require("../../db");
const { Op } = require("sequelize");

const getPets = async (req, res) => {
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
      if (filters.petID_filter) {
        queryOptions.where.petID = {
          [Op.eq]: filters.petID_filter,
        };
      }

      if (filters.name_filter) {
        queryOptions.where.name = {
          [Op.like]: `%${filters.name_filter}%`,
        };
      }

      if (filters.species_filter) {
        queryOptions.where.specie = {
          [Op.like]: `%${filters.species_filter}%`,
        };
      }

      if (filters.breed_filter) {
        queryOptions.where.breed = {
          [Op.like]: `%${filters.breed_filter}%`,
        };
      }

      if (filters.status_filter) {
        queryOptions.where.status = {
          [Op.like]: `%${filters.status_filter}%`,
        };
      }

      if (filters.castrated_filter) {
        queryOptions.where.castrated = {
          [Op.like]: `%${filters.castrated_filter}%`,
        };
      }

      if (filters.weight_order) {
        queryOptions.order.push(["weight", filters.weight_order.toUpperCase()]);
      }

      if (filters.size_order) {
        queryOptions.order.push(["size", filters.size_order.toUpperCase()]);
      }
    }

    const allPets = await Pets.findAndCountAll(queryOptions);
    return res.status(200).json(allPets);
  } catch (error) {
    console.error("Error al obtener todos los pets:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getPets;
