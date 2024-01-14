const { References } = require("../../db");
const { Op } = require("sequelize");

const getReferenceById = async (req, res) => {
  try {
    const { filters} = req.body;

    const queryOptions = {
      where: {},
      order: [],
    };

    if (filters) {
      if (filters.referenceID_filter) {
        queryOptions.where.referenceID = {
          [Op.eq]: filters.referenceID_filter,
        };
      }
    }

    const reference = await References.findAndCountAll(queryOptions);
    return res.status(200).json(reference);
  } catch (error) {
    console.error("Error al obtener Referencia", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {getReferenceById};
