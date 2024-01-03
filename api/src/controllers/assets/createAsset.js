const { Op } = require('sequelize');
const { Assets } = require('../../db');

const createAsset = async (req, res) => {
  const {
    name,
    description,
    status,
    coordinator,
  } = req.body;

  try {
    // Validación de datos
    if (!name || !description || !status || !coordinator) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    // Buscar o crear el servicio
    const [newAsset, created] = await Assets.findOrCreate({
      where: {
        [Op.or]: [{ name }, { description }],
      },
      defaults: { ...req.body },
    });

    if (!created) {
      return res.status(409).json({ error: 'Recurso con este nombre o descripcion ya existe.' });
    }

    return res.status(201).json({ newAsset, created });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createAsset };