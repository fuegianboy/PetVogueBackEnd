const { Services } = require("../../db");

// Disable service
const deleteService = async (req, res) => {
  try {
    const { serviceID } = req.params;

    const deletedService = await Services.update(
      { status: "disabled" },
      { where: { serviceID, status: "enabled" } }
    );

    if (deletedService[0] === 0) {
      return res
        .status(404)
        .json({ message: "Servicio no encontrado o ya está desactivado" });
    }

    return res
      .status(200)
      .json({ message: "Servicio desactivado exitosamente" });
  } catch (error) {
    console.error("Error al desactivar el servicio:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = deleteService;
