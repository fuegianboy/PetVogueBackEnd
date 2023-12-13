const { Services } = require("../../db");

// Restore service
const restoreService = async (req, res) => {
  try {
    const { serviceID } = req.params;

    const restoredService = await Services.update(
      { status: "enabled" },
      { where: { serviceID, status: "disabled" } }
    );

    if (restoredService[0] === 0) {
      return res
        .status(404)
        .json({ message: "Servicio no encontrado o ya está activado" });
    }

    return res
      .status(200)
      .json({ message: "Servicio restaurado exitosamente" });
  } catch (error) {
    console.error("Error al restaurar el servicio:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = restoreService;
