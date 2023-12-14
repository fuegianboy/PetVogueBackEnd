const { Users } = require("../../db")

const updateUser = async (req, res) => {
    
    try {

        const data = req.body
        const {id} = req.params
        const user  = await Users.findByPk(id)

        if(!user) {
            return res.status(422).send({message:"User not found"})
        }

        await user.update({ ...data })
        return res.status(200).json(user)
    
    } catch (error) {
        console.log(error)
        console.error(error)
        return res.status(500).send({ message: "Error modifying User record", error: error.message });
    }
}

module.exports = {
    updateUser
}