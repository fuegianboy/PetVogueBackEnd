

const deleteProduct = async (req, res) => {
    try {
        const { productID } = req.params;

        const product = await Product.findByPk(productID);

        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

        await product.destroy();

        return res.sendStatus(200); 
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = { deleteProduct };
