const { Services } = require("../../db");

//Get all services
const getAllServices = async (req, res) => {
  try {
    const allServices = await Services.findAll();
    return res.status(200).json(allServices);
  } catch (error) {
    console.error("Error al obtener los servicios: ", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getAllServices;
