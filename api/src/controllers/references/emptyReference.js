const { References } = require('../../db');

const emptyReferences = async (req, res) => {
  try {
    const deletedRows = await References.destroy({
      where: {},
      truncate: true, // Esto elimina todos los registros y reinicia la secuencia
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'No se encontraron referencias para eliminar' });
    }

    return res.status(200).json({ message: 'Todas las referencias han sido eliminadas exitosamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = { emptyReferences };
