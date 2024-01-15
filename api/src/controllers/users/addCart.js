const { Users } = require("../../db");

const addCart = async (req, res) => {
    try {
        const { productID, userID } = req.body; 
        console.log(productID)
        console.log(userID)

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(422).send({ message: "Usuario no encontrado para agregar item" });
        }

        if (user.cart.includes(productID)) {
            return res.status(422).send({ message: "Item ya existe en el carrito de compras" });
        }

        user.cart = [...user.cart, productID];
        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al agregar item al carrito de compras", error: error.message });
    }
};

module.exports = {
    addCart
};
