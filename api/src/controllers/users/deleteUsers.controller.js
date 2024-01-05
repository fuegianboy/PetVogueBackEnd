const { Users } = require("../../db");

const deleteUser = async (req, res) => {
  try {
    const userID = req.params.id;

    const deleteUser = await Users.update(
      { status: "disabled" },
      { where: { userID, status: "enabled" } }
    );

    if (deleteUser[0] === 0) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado o ya está desactivado" });
    }

    return res
      .status(200)
      .json({ message: "Usuario desactivado exitosamente" });
  } catch (error) {
    console.error("Error al desactivar el Usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { deleteUser };