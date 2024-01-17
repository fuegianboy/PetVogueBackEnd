const { Users } = require("../../db");

const emptyCart = async (req, res) => {
    try {
        const { userID } = req.body; 

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(422).send({ message: "Usuario no encontrado para vaciar carrito de compras" });
        }

        await user.update({ cart2: [] }, { where: { userID } });

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al agregar item al carrito de compras", error: error.message });
    }
};

module.exports = {
    emptyCart
};
