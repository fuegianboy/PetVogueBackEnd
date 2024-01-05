const { Op } = require("sequelize")
const { Users } = require("../../db")
const jwt  = require("jsonwebtoken")

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
        
        if ( !email )
            return res.status(404).json("Incomplete data")

        const [newUser, created] = await Users.findOrCreate({
            
            where: {
                [Op.or]: [{ email }]
            },
            defaults: { ...req.body }
        })
        console.log(newUser, "newUser")
        if (!created)
            return res.status(404).json({ error: "User with this email or phone already exists." })

    const token = jwt.sign({id: newUser.userID}, "miLlaveSecreta", {expiresIn:"1m"})
    console.log(token, "token")
    
        return res.status(200).json({ newUser, created, token })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {createUser};
