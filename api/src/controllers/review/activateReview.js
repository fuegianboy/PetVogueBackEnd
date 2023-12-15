const { Reviews } = require('../../db');

const activateReview = async (req, res) => {
    try {
        const { reviewID } = req.params;
        const review = await Reviews.findByPk(reviewID);

        if (!review) {
            return res.status(404).send('Review no encontrada');
        }

        if (review.status !== 'Show') {
            await review.update({ status: 'Show' });
        }

        return res.status(200).send('La revisión ha sido marcada como "mostrar".');

    } catch (error) {
        console.error('Error al activar la review:', error);
        return res.status(500).send('Error interno del servidor');
    }
}

module.exports = { activateReview };
