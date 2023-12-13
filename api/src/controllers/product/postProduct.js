const { Router } = require('express');
const router = Router();
/* const { Product } = require('../models/product'); */

router.post('/', async (req, res) => {
  try {

    const {
      productID,
      name,
      type,
      description,
      image,
      price,
      stock,
      brand,
      status,
    } = req.body;

    const newProduct = await Product.create({
        productID,
        name,
        type,
        description,
        image,
        price,
        stock,
        brand,
        status,
    });

    if (!newProduct) {
      return res.status(500).send("Error al crear el nuevo producto");
    }

   
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    return res.status(500).json({ error: 'Error interno del servidor al crear el producto' });
  }
});

module.exports = router;
