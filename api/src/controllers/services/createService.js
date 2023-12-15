const { Op } = require('sequelize');
const { Services } = require('../../db');

const createService = async (req, res) => {
  const {
    name,
    description,
    category,
    price,
    image,
    status,
  } = req.body;

  try {
    // Validación de datos
    if (!name || !description || !category || !image) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    // Buscar o crear el servicio
    const [newService, created] = await Services.findOrCreate({
      where: {
        [Op.or]: [{ name }, { category }],
      },
      defaults: { ...req.body },
    });

    if (!created) {
      return res.status(409).json({ error: 'Servicio con este nombre o categoría ya existe.' });
    }

    return res.status(201).json({ newService, created });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createService };