const { Orders, Users, Products, Services } = require('../../db');

const createOrder = async (req, res) => {
  const { userID, productID, serviceID, date, quantity, amount, type, status } = req.body;
  try {
    if (!userID || (!productID && !serviceID) || !date || !quantity || !amount || !type || !status ) {
      return res.status(400).json({ error: "Incomplete Data" });
    }

    const user = await Users.findByPk(userID);
    const product = await Products.findByPk(productID);
    const service = await Services.findByPk(serviceID)

    if (!user || !product || !service) {
      return res.status(404).json({ error: 'User or Product or Service not found' });
    }

    const order = await Orders.create({
      userID,
      productID,
      serviceID,
      date,
      quantity,
      amount,
      type,
      status
    });

    return res.status(201).json({ message: "Data added to DB successfully", order });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error saving Order", error: error.message });
  }
};

module.exports = {
    createOrder
}