const { Router } = require('express');
const { Op } = require('sequelize'); 
const router = Router();
/* const { Product } = require('../models/product'); */

router.get('/name', async (req, res) => {
  try {
    const name = req.query.name;

    if (name) {
      let products = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });

      return res.json(products);
    } else {
      return res.status(400).json({ error: 'proporciona un nombre para la búsqueda.' });
    }
  } catch (error) {
    console.error('Error al buscar productos:', error);
    return res.status(500).json({ error: 'Error interno del servidor al buscar productos' });
  }
});

module.exports = router;
