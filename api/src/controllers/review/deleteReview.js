

const deleteReview = async (req, res) => {
    try {
        const { reviewID } = req.params;
        const review = await Reviews.findByPk(reviewID);

        if (!review) {
            return res.status(404).send('Review no encontrada');
        }

        if (review.status !== 'Do Not Show') {
            await review.update({ status: 'Do Not Show' });
        }

        return res.status(200).send('La revisión ha sido marcada como "No mostrar".');

    } catch (error) {
        console.error('Error al eliminar la review:', error);
        return res.status(500).send('Error interno del servidor');
    }
};

module.exports = { deleteReview };
