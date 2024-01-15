const { Op } = require("sequelize");
const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    systemRole,
    phone,
    photo,
    address,
    birth,
    dni,
    status,
  } = req.body;

  try {
    if (!email) return res.status(404).json("Datos incompletos.");

    const [user, created] = await Users.findOrCreate({
      where: {
        [Op.or]: [{ email }],
      },
      defaults: { ...req.body },
    });

    if (user.status !== "enabled") {
      return res.status(401).json({
        error: "Cuenta suspendida. Pongase en contacto con un administrador",
      });
    }

    const token = jwt.sign({ id: user.userID }, SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log(token, "token");

    return res.status(200).json({ user, created, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
