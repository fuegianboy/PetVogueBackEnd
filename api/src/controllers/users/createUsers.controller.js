const { Op } = require("sequelize")
const { Users } = require("../../db")

const createUser = async (req, res) => {
    
    const {
        firstName,
        lastName,
        email,
        password,
        systemRole,
        phone,
        photo,
        address,
        birth,
        dni,
        status,
    } = req.body

    try {
        
        if (!firstName || !lastName || !email || !phone || !status || !systemRole)
            return res.status(404).json("Incomplete data")

        const [newUser, created] = await Users.findOrCreate({
            where: {
                [Op.or]: [{ email }, { phone }]
            },
            defaults: { ...req.body }
        })

        if (!created)
            return res.status(404).json({ error: "User with this email or phone already exists." })

        return res.status(200).json({ newUser, created })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {createUser};