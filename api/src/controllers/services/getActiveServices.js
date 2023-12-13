const { Services } = require("../../db");

// Get active services
const getActiveServices = async (req, res) => {
  try {
    const activeServices = await Services.findAll({
      where: { status: 'enabled' },
    });
    return res.status(200).json(activeServices);
  } catch (error) {
    console.error("Error al obtener los servicios activos:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getActiveServices;
