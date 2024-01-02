const { Pets } = require("../../db");

// Restaurar pet
const restorePet = async (req, res) => {
  try {
    const { petID } = req.params;

    const restoredPet = await Pets.update(
      { status: "enabled" },
      { where: { petID, status: "disabled" } }
    );

    if (restoredPet[0] === 0) {
      return res
        .status(404)
        .json({ message: "Mascota no encontrada o ya está restaurada" });
    }

    return res.status(200).json({ message: "Mascota restaurada exitosamente" });
  } catch (error) {
    console.error("Error al restaurar la mascota:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = restorePet;
