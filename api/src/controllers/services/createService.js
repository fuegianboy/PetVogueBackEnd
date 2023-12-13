const { Services } = require("../../db");

//Create Service
const createService = async (req, res) => {
  try {
    const { name, description, category, price, image, status } = req.body;

    const newService = await Services.create({
      name,
      description,
      category,
      price,
      image,
      status,
    });

    return res
      .status(201)
      .json({ message: "Servicio creado exitosamente", service: newService });
  } catch (error) {
    console.error("Error al crear el servicio", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = createService;
