

const allReview = async (req, res) => {
    try {
        const reviewID = req.query.reviewID;
        const allReviews = reviewID ? { reviewID: reviewID } : {};

        const reviews = await Reviews.findAll({
            where: allReviews,
        });

        return res.json(reviews);

    } catch (error) {
        console.error('Error al buscar reviews:', error);
        return res.status(500).json({ error: 'Error interno del servidor al buscar revisiones' });
    }
};

module.exports = allReview;
