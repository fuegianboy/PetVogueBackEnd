const { Users } = require("../../db");

const addCart = async (req, res) => {
    try {
        const { productID, userID, qty } = req.body; 

        const user = await Users.findByPk(userID);

        if (!user) {
            return res.status(422).send({ message: "Usuario no encontrado para agregar item" });
        }

        const existingItemIndex = user.cart2.findIndex(item => item.productID === productID);

        if (existingItemIndex !== -1) {
            
            user.cart2[existingItemIndex].quantity += qty;

        } else {
            
            user.cart2.push({ productID, quantity: qty });
        }
        await Users.update({ cart2: user.cart2 }, { where: { userID: user.userID } });

        console.log(user);

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Error al agregar item al carrito de compras", error: error.message });
    }
};

module.exports = {
    addCart
};
