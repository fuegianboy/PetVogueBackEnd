const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { Users } = require("../../db");
const SECRET_KEY = process.env.SECRET_KEY;

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).json("Datos incompletos");
    }

    const existingUser = await Users.findOne({
      where: {
        [Op.and]: [{ email, password }],
      },
    });

    if (!existingUser) {
      return res.status(401).json({ error: "Email o contraseña incorrecta" });
    }
    if (!existingUser.systemRole.includes("admin")) {
      return res.status(403).json({
        error: "Acceso no autorizado. Se requiere rol de administrador.",
      });
    }

    if (existingUser.status !== "enabled") {
      return res
        .status(403)
        .json({
          error: "Cuenta suspendida. Pongase en contacto con un administrador",
        });
    }

    const token = jwt.sign({ id: existingUser.userID }, SECRET_KEY, {
      expiresIn: "1m",
    });
    console.log(token, "token");

    return res.status(200).json({ user: existingUser, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { adminLogin };
