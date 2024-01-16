const { Op } = require("sequelize");
const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;
const mailTo = require("../mailer/mailTo");
const message = require("../mailer/message");

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
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = await Users.create({
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
    });
    if (newUser) {
      const emailInfo = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        subject: "Registro Exitoso",
        html: `¡Bienvenido! Te has registrado exitosamente en PetVogue. ¡Esperamos que disfrutes de tu experiencia!`,
        link: "https://petvoguehome-production.up.railway.app/",
      };

      if (
        !emailInfo.firstName ||
        !emailInfo.email ||
        !emailInfo.subject ||
        !emailInfo.html ||
        !emailInfo.link
      ) {
        return res.status(404).json("Incomplete data");
      }
      const emailResponse = await mailTo({ body: emailInfo });
      if (!emailResponse.messageId) {
        return res
          .status(409)
          .json({ message: "la notificacion no fue aprobada" });
      } else {
        console.log("Email sent successfully");
      }
    }

    const token = jwt.sign({ id: newUser.userID }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser };
