const { Products } = require('../../db');
const {
  validateName,
  validateType,
  validateDescription,
  validateImageLink,
  validatePrice,
  validateStock,
} = require('../../utils/validations');

const createProduct = async (req, res) => {
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

    // Validación del nombre
    if (!validateName(name)) {
      return res.status(400).json({ error: 'Nombre no válido' });
    }

    // Validación del tipo
    if (!validateType(type)) {
      return res.status(400).json({ error: 'Tipo no válido' });
    }

    // Validación de la descripción
    if (!validateDescription(description)) {
      return res.status(400).json({ error: 'Descripción no válida' });
    }

    // Validación de la imagen
    if (!validateImageLink(image)) {
      return res.status(400).json({ error: 'Enlace de imagen no válido' });
    }

    // Validación del precio
    if (!validatePrice(price)) {
      return res.status(400).json({ error: 'Precio no válido' });
    }

    // Validación del stock
    if (!validateStock(stock)) {
      return res.status(400).json({ error: 'Stock no válido' });
    }

    // Crear el nuevo producto
    const newProduct = await Products.create({
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
};

module.exports = createProduct;
