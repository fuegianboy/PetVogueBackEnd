const { Orders } = require('../../db');

const deleteOrder = async (req, res) => {

  try {
    const {id} = req.params
    
    const result = await Orders.update({ status: 'disabled' }, {
      where: {
        orderID: id,
        status: 'enabled'
      }
    })

    if (result[0] === 0 ) {
      return res.status(404).send({ message: "Orden no encontrada o ya desactivada" , error: error.message });
    }

    return res.status(200).send({ message: "Orden desactivada exitosamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Error al desactivar orden", error: error.message });
  }
};

module.exports = {
    deleteOrder
}
