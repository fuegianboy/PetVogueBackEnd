const { Op } = require("sequelize");
const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // Asegúrate de tener la librería bcrypt instalada
const SECRET_KEY = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
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
    if (!email || !password) {
      return res.status(400).json("Datos incompletos.");
    }

    // Verifica si el email ya existe en la base de datos
    const existingUser = await Users.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Este correo electronico ya se encuentra registrado." });
    }

    // Hashea la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      systemRole,
      phone,
      photo,
      address,
      birth,
      dni,
      status,
    });

    const token = jwt.sign({ id: newUser.userID }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };
