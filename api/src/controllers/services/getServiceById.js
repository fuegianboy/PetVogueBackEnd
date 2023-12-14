const { Services } = require("../../db");

//Get service by ID
const getServiceById = async (req, res) => {
  try {
    const { serviceID } = req.params;

    const service = await Services.findOne({
      where: { serviceID },
    });

    if (!service) {
      return res.status(404).json({ message: "Servicio no encontrado" });
    }

    return res.status(200).json(service);
  } catch (error) {
    console.error("Error al obtener el servicio por ID:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = getServiceById;
