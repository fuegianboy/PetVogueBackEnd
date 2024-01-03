const { Bookings } = require('../../db');

const deleteBooking = async (req, res) => {

  try {
    const {id} = req.params
    
    const result = await Bookings.update({ status: 'disabled' }, {
      where: {
        orderID: id,
        status: 'enabled'
      }
    })

    if (result[0] === 0 ) {
      return res.status(404).send({ message: "Turno no encontrado o ya desactivado" , error: error.message });
    }

    return res.status(200).send({ message: "Turno desactivado exitosamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al desactivar Turno", error: error.message });
  }
};

module.exports = {
    deleteBooking
}
