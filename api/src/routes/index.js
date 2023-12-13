const { Router } = require("express");
// const usersRouter = require("./users")

const router = Router();

const createService = require("../controllers/services/createService");

router.post("/services/create-service", createService);

router.use("/adrian", (req, res) =>{
    console.log("llegamos a algun lugar--------------#####---------")
})



module.exports = router;