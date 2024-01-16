const { Users } = require("../../db");

const removeCart = async (req, res) => {
    try {
        const { productID, userID } = req.body;

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(422).send({ message: "Usuario no encontrado para eliminar el item" });
        }

        if (!user.cart.includes(productID)) {
            return res.status(422).send({ message: "Item no encontrado en el carrito de compras" });
        }

        user.cart = user.cart.filter(itemId => itemId !== productID);
        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al eliminar item del carrito de compras", error: error.message });
    }
};

module.exports = {
    removeCart
};
