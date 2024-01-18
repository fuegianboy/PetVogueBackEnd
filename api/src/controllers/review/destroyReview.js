const { Reviews } = require("../../db");

const destroyReview = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Reviews.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: "Review no encontrado" });
    }

    await review.destroy();

    return res.status(200).json({ message: "Review eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { destroyReview };
