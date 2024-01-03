const { Users, Orders, Pets, Assets } = require('../../db');

const createBooking = async (req, res) => {
  const { dateTime, description, type, status, userID, orderID, petID, assetID } = req.body;
  try {
    if (!dateTime || !description || !type || !userID || !assetID ) {
      return res.status(400).json({ error: "Información incompleta" });
    }

    const user = await Users.findByPk(userID);

    const booking = await Orders.create({
      dateTime, 
      description, 
      type, 
      status, 
      userID, 
      orderID, 
      petID, 
      assetID
    });

    return res.status(201).json({ message: "Turno registrado", booking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar el turno", error: error.message });
  }
};

module.exports = {
    createBooking
}