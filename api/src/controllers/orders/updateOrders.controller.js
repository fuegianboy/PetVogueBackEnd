const { Orders } = require('../../db');

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { userID, productID, serviceID, date, rate, quantity, amount, type, status, currency_id } = req.body;
        const order = await Orders.findByPk(id);
        
        if (!order) {
            return res.status(404).send('Order no encontrado');
        }
        if (!userID && !productID && !serviceID && !date && !rate && !quantity && !amount && !type && !status && !currency_id) {
            return res.status(400).send('Al menos un campo de actualización es requerido');
        }

        await order.update({
            userID, 
            productID, 
            serviceID, 
            date, 
            rate, 
            quantity, 
            amount, 
            type, 
            status, 
            currency_id
        });

        return res.sendStatus(200);
    } catch (error) {
        console.error('Error al editar Order:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = { updateOrder };
