const { Router } = require("express");
// const usersRouter = require("./users")

const router = Router();

router.use("/adrian", (req, res) =>{
    console.log("llegamos a algun lugar--------------#####---------")
})



module.exports = router;