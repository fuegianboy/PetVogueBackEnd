const { Pets } = require("../../db");

// Editar pet
const updatePet = async (req, res) => {
  try {
    const { petID } = req.params;

    const {
      name,
      birth,
      gender,
      specie,
      breed,
      castrated,
      vacRecord,
      weight,
      size,
      image,
      status,
    } = req.body;

    const [updatedRowsCount, updatedPet] = await Pets.update(
      {
        name,
        birth,
        gender,
        specie,
        breed,
        castrated,
        vacRecord,
        weight,
        size,
        image,
        status,
      },
      { where: { petID }, returning: true }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    return res.status(200).json({
      message: "Mascota editada exitosamente",
      pet: updatedPet[0],
    });
  } catch (error) {
    console.error("Error al editar la mascota:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { updatePet };
