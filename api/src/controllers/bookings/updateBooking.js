const { Bookings } = require('../../db');

const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { dateTime, description, type, status, userID, orderID, petID, assetID } = req.body;
        const booking = await Bookings.findByPk(id);
        
        if (!booking) {
            return res.status(404).send('Turno no encontrado');
        }
        if (!dateTime && !description && !type && !status && !userID && !orderID && !petID && !assetID) {
            return res.status(400).send('Al menos un campo de actualización es requerido');
        }

        await booking.update({
            dateTime,
            description,
            type, 
            status, 
            userID, 
            orderID, 
            petID, 
            assetID, 
        });

        return res.status(200).send({ message: "Turno actualizado exitosamente" });
    } catch (error) {
        console.error('Error al actualizar Turno', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = { updateBooking };
