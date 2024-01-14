// const { References } = require('../../db');

// const getReferenceById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const reference = await References.findOne({
//       where: { referenceID: id },
//     });

//     console.log("aca la referencia ")
//     console.log(reference)
//     if (!reference) {
//       return res.status(404).json({ error: 'Referencia no encontrada' });
//     }

//     const responseData = {
//       referenceID: References.dataValues.referenceID,
//       data: References.dataValues.data,
//     };

//     return res.status(200).json(responseData);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Error interno del servidor', details: error.message });
//   }
// };

// module.exports = { getReferenceById };


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
    console.error("Error al obtener todos los pets:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {getReferenceById};
