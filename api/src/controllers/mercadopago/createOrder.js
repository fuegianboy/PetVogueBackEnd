const {Users, Products} = require("../../db")


const createOrder = async (req, res) => {

  try {

    const {status, external_reference} = req.query
    const usuarioID = "d59f5eec-6225-45c0-829a-c6976af90dd9"

    await Users.update({
      dni: external_reference
    },
    {
      where: {userID: usuarioID}
    })


    // const { external_reference } = req.params;
    // const usuarioID = "a3d022a6-8e57-4b88-b5d0-b631a0776b3e"

    // await Users.update({
    //     dni: external_reference, 
    // },
    // {
    //   where: {usuarioID}
    // });

    return res.json("datos");
} catch (error) {
    console.error('Error al editar Order:', error);
    return res.status(500).send('Error interno del servidor');
}
  
  }
  module.exports = createOrder