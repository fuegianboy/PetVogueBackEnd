const { Products } = require('../../db');

const editProduct = async (req, res) => {
    try {
        const { productID } = req.params;
        const { name, type, description, image, price, stock, brand } = req.body;

        if (!name && !type && !description && !image && !price && !stock && !brand) {
    
        return res.status(400).send('Al menos un campo de actualización es requerido');
    }

        const product = await Products.findByPk(productID);

       
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }

     
        await product.update({
            name,
            type,
            description,
            image,
            price,
            stock,
            brand,
        });

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error al editar producto:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = { editProduct };
