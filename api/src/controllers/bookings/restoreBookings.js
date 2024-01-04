const { Bookings } = require("../../db");

const restoreBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const restoredBooking = await Bookings.update(
      { status: "enabled" },
      { where: { bookingID: id, status: "disabled" } }
    );

    if (restoredBooking[0] === 0) {
      return res
        .status(404)
        .json({ message: "Turno no encontrado o ya está activado" });
    }

    return res
      .status(200)
      .json({ message: "Turno restaurado exitosamente" });
  } catch (error) {
    console.error("Error al restaurar el Turno:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = { restoreBooking };
