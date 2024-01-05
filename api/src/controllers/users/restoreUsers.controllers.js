const { Users } = require("../../db");

const restoreUser = async (req, res) => {
  try {
    const { id } = req.params;

    const restoredUser = await Users.update(
      { status: "enabled" },
      { where: { userID: id, status: "disabled" } }
    );

    if (restoredUser[0] === 0) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado o ya está activado" });
    }

    return res
      .status(200)
      .json({ message: "Usuario restaurado exitosamente" });
  } catch (error) {
    console.error("Error al restaurar Usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor", error: error.message });
  }
};

module.exports = { restoreUser };
