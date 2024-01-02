const { Pets } = require("../../db");

// Desactivar pet
const deletePet = async (req, res) => {
  try {
    const { petID } = req.params;

    const deletedPet = await Pets.update(
      { status: "disabled" },
      { where: { petID, status: "enabled" } }
    );

    if (deletedPet[0] === 0) {
      return res
        .status(404)
        .json({ message: "Mascota no encontrada o ya está desactivada" });
    }

    return res
      .status(200)
      .json({ message: "Mascota desactivada exitosamente" });
  } catch (error) {
    console.error("Error al desactivar la mascota:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { deletePet };
