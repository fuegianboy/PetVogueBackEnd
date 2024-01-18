const { Reviews } = require('../../db');

const createReview = async (req, res) => {
    try {
        const {
            orderID, 
            review,
            productID
        } = req.body;

        const currentDate = new Date();

        const newReview = await Reviews.create({
            orderID, 
            date: currentDate, 
            review,
            productID
        });

        if (!newReview) {
            return res.status(500).send("Error al crear el nuevo comentario");
        }

        return res.status(201).json(newReview);
    } catch (error) {
        console.error('Error al crear la revisión:', error);
        return res.status(500).json({ error: 'Error interno del servidor al crear la revisión' });
    }
};

module.exports = createReview;
