require('dotenv').config();
const sendEmail = require('./sendEmail');

const mailTo = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      email,
      subject,
      html,
      link,
    } = req.body
    

    const userData = { firstName, lastName, email }
    const messageData = { subject, body: html, link }
    const info = await sendEmail(userData, messageData)
   
   return info 
 

  } catch (error) {

    console.error(error)
      res.status(400).send("Failed to send email") 

  }

}
module.exports = mailTo