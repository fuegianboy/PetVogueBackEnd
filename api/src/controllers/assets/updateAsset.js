const { Assets } = require("../../db");

const updateAsset = async (req, res) => {
  try {
    const { assetID } = req.params;

    const { name, description, status, coordinator } = req.body;

    const [updated, updatedAsset] = await Assets.update(
      { name, description, status, coordinator },
      { where: { assetID }, returning: true }
    );

    if (updated === 0) {
      return res.status(404).json({ message: "Recurso no encontrado" });
    }

    return res.status(200).json({
      message: "Recurso actualizado exitosamente",
      service: updatedAsset[0],
    });
  } catch (error) {
    console.error("Error al actualizar en Recurso:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { updateAsset };
