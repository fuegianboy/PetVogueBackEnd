const { Op } = require("sequelize");
const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const bcrypt = require('bcrypt');

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
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await Users.findOne({
      where: {
        [Op.or]: [{ email }],
      },
    });

    if (existingUser) {
      return res.status(409).json({ error: "User with this email already exists." });
    }

    // Hash de la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar el nuevo usuario en la base de datos
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

    // Generar token JWT
    const token = jwt.sign({ id: newUser.userID }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({ newUser, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createUser };