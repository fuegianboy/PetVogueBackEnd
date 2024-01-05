const { Assets } = require("../../db");

// Disable service
const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAsset = await Assets.update(
      { status: "disabled" },
      { where: { assetID: id, status: "enabled" } }
    );

    if (deletedAsset[0] === 0) {
      return res
        .status(404)
        .json({ message: "Recurso no encontrado o ya está desactivado" });
    }

    return res
      .status(200)
      .json({ message: "Recurso desactivado exitosamente" });
  } catch (error) {
    console.error("Error al desactivar el Recurso:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = { deleteAsset };
