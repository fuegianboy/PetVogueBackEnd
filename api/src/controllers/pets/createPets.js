const { Pets } = require("../../db");
const { Op } = require("sequelize");

const createPet = async (req, res) => {
  const {
    userID,
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

  try {
    // Validación de datos
    if (!userID || !name || !specie || !status) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    // Buscar o crear el pet
    const [newPet, created] = await Pets.findOrCreate({
      where: {
        [Op.or]: [{ name }, { breed }],
      },
      defaults: { ...req.body },
    });

    if (!created) {
      return res
        .status(409)
        .json({ error: "Mascota con este nombre o raza ya existe." });
    }

    return res.status(201).json({ newPet, created });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = createPet;
