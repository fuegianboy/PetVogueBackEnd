const { Orders } = require("../../db");

const restoreOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const restoredOrder = await Orders.update(
      { status: "enabled" },
      { where: { orderID: id, status: "disabled" } }
    );

    if (restoredOrder[0] === 0) {
      return res
        .status(404)
        .json({ message: "Orden no encontrada o ya está activada" });
    }

    return res
      .status(200)
      .json({ message: "Orden restaurada exitosamente" });
  } catch (error) {
    console.error("Error al restaurar la Orden:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = { restoreOrder };
