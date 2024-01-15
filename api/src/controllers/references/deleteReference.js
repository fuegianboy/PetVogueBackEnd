const { References } = require('../../db');

const deleteReference = async (req, res) => {
  const { referenceID } = req.params;

  try {

    const deletedRows = await References.destroy({
      where: { referenceID },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Referencia no encontrada o ya eliminada' });
    }

    return res.status(200).json({ message: 'Referencia eliminada exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = { deleteReference };

