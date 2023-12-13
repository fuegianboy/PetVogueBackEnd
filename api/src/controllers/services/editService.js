const { Services } = require("../../db");

// Edit service
const editService = async (req, res) => {
  try {
    const { serviceID } = req.params;

    const { name, description, category, price, image, status } = req.body;

    const [updatedRowsCount, updatedService] = await Services.update(
      { name, description, category, price, image, status },
      { where: { serviceID }, returning: true }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: "Servicio no encontrado" });
    }

    return res
      .status(200)
      .json({
        message: "Servicio editado exitosamente",
        service: updatedService[0],
      });
  } catch (error) {
    console.error("Error al editar el servicio:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = editService;
