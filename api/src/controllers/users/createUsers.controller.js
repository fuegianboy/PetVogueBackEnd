const { Op } = require("sequelize");
const { Users } = require("../../db");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const mailTo = require("../mailer/mailTo");
const message = require("../mailer/message");

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
    } = req.body;

    try {
        console.log('Received registration request:', req.body);  // Log de la solicitud recibida

        if (!email)
            return res.status(404).json("Incomplete data");

        const [newUser, created] = await Users.findOrCreate({
            where: {
                [Op.or]: [{ email }]
            },
            defaults: { ...req.body }
        });

        console.log('User created:', newUser.toJSON());  // Log del usuario creado

        if (created) {
            const emailInfo = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                subject: "Registro Exitoso",
                html: `¡Bienvenido! Te has registrado exitosamente en PetVogue. ¡Esperamos que disfrutes de tu experiencia!`,
                link: "https://petvoguehome-production.up.railway.app/"
            };

            if (!emailInfo.firstName  || !emailInfo.email || !emailInfo.subject || !emailInfo.html || !emailInfo.link) {
                return res.status(404).json("Incomplete data")
              }
               const emailResponse = await mailTo({ body: emailInfo  });
               if(!emailResponse.messageId){
                return res.status(409).json({"message": "la notificacion no fue aprobada"})
               }else{
                console.log('Email sent successfully');  
               }
                
           
        };

        const token = jwt.sign({ id: newUser.userID }, SECRET_KEY, { expiresIn: "1h" });
        console.log(token, "token");

        return res.status(200).json({ newUser, created, token });
    } catch (error) {
        console.error('Error processing registration:', error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { createUser };
