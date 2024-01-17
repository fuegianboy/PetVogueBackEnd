const { Users } = require("../../db");

const removeCart = async (req, res) => {
    try {
        const { productID, userID, qty } = req.body; 

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(422).send({ message: "Usuario no encontrado para agregar item" });
        }

        const existingItemIndex = user.cart2.findIndex(item => item.productID === productID);

        if (existingItemIndex !== -1) {

            user.cart2[existingItemIndex].quantity = Math.max(0, user.cart2[existingItemIndex].quantity - qty);

            if (user.cart2[existingItemIndex].quantity === 0) {

                user.cart2.splice(existingItemIndex, 1);
            }
        } 
        await Users.update({ cart2: user.cart2 }, { where: { userID: user.userID } });
        // await user.save();
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al agregar item al carrito de compras", error: error.message });
    }
};

module.exports = {
    removeCart
};

