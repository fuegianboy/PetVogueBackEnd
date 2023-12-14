const { Products } = require('../../db');

const allProduct = async (req, res) => {
  try {
    const name = req.query.name;
    
    const allProducts = name ? { name: name } : {};
    
    const products = await Products.findAll({
      where: allProducts,
    });

    return res.json(products);
  } catch (error) {
    console.error('Error al buscar productos:', error);
    return res.status(500).json({ error: 'Error interno del servidor al buscar productos' });
  }
};

module.exports = allProduct;
