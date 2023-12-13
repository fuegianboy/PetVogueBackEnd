const { Services } = require("../../db");

// Get inactive services
const getInactiveServices = async (req, res) => {
  try {
    const inactiveServices = await Services.findAll({
      where: { status: 'disabled' },
    });
    return res.status(200).json(inactiveServices);
  } catch (error) {
    console.error("Error al obtener los servicios inactivos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getInactiveServices;
