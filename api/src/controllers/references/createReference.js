const { Op } = require('sequelize');
const { References } = require('../../db');

const createReference = async (req, res) => {
  const { data } = req.body;

  try {

    const newReference = await References.create({
      data,
    });

    if (!newReference) {
      return res.status(500).json({ error: 'Referencia externa no se guardó' });
    }

    return res.status(201);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createReference };