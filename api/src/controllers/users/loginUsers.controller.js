const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { Users } = require("../../db");
const SECRET_KEY = process.env.SECRET_KEY;

const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(404).json("Incomplete data");
    }
    

    const existingUser = await Users.findOne({
      where: {
        [Op.and]: [{ email, password }],
      },
    });

    if (!existingUser) {
      return res.status(401).json({ error: "Email incorrecto" });
    }

    if (password !== existingUser.password) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    if (existingUser.status === "disabled") {
      return res
        .status(401)
        .json({ error: "Usuario deshabilitado. Contacte al administrador." });
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

module.exports = { loginUsers };
