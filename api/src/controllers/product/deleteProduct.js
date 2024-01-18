const { Products } = require("../../db");

const deleteProduct = async (req, res) => {
  try {
    const { productID } = req.params;

    const product = await Products.findByPk(productID);

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        if (product[0] === 0 ) {
            return res.status(404).json({message: "Producto no encontrado o ya está desactivado"})
        }

        await product.update({ status: 'disabled' });

    if (product[0] === 0) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado o ya está desactivado" });
    }

    await product.update({ status: "disabled" });

    return res.sendStatus(200);
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

module.exports = { deleteProduct };
