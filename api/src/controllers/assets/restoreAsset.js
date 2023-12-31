const { Assets } = require("../../db");

const restoreAsset = async (req, res) => {
  try {
    const { id } = req.params;

    const restoredAsset = await Assets.update(
      { status: "enabled" },
      { where: { assetID: id, status: "disabled" } }
    );

    if (restoredAsset[0] === 0) {
      return res
        .status(404)
        .json({ message: "Recurso no encontrado o ya está activado" });
    }

    return res
      .status(200)
      .json({ message: "Recurso restaurado exitosamente" });
  } catch (error) {
    console.error("Error al restaurar el Recurso:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = { restoreAsset };
