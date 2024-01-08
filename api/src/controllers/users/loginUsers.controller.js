const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../../db");
const SECRET_KEY = process.env.SECRET_KEY;

const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign({ userID: user.userID }, SECRET_KEY, {
      expiresIn: "1h",
    });

    const userResponse = {
      id: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      systemRole: user.systemRole,
      phone: user.phone,
      photo: user.photo,
      address: user.address,
      birth: user.birth,
      dni: user.dni,
      status: user.status,
      favoriteProducts: user.favoriteProducts,
      favoriteServices: user.favoriteServices,
      cart: user.cart
    }

    res.json({ token, user: userResponse });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { loginUsers };