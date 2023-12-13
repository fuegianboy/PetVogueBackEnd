const { Router } = require('express');
const router = Router();
/* const { Product } = require('../models/product'); */

router.get('/', async (req, res) => {
  try {
    const name = req.query.name;

    const allProducts = name ? { name: name } : {};
    
    const products = await Product.findAll({
      where: allProducts,
    });

    return res.json(products);
  } catch (error) {
    console.error('Error al buscar productos:', error);
    return res.status(500).json({ error: 'Error interno del servidor al buscar productos' });
  }
});

module.exports = router;
