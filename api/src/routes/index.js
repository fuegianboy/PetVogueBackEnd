const { Router } = require("express");
// const usersRouter = require("./users")

const router = Router();

// Services
const getActiveServices = require("../controllers/services/getActiveServices");
const getInactiveServices = require("../controllers/services/getInactiveService");
const getAllServices = require("../controllers/services/getAllServices");
const createService = require("../controllers/services/createService");
const deleteService = require("../controllers/services/deleteService");
const restoreService = require("../controllers/services/restoreService");
const editService = require("../controllers/services/editService");

router.get("/services", getActiveServices);
router.get("/services/inactive", getInactiveServices);
router.get("/services/all", getAllServices);
router.post("/services/create", createService);
router.delete("/services/delete/:serviceID", deleteService);
router.put("/services/restore/:serviceID", restoreService);
router.put("/services/edit/:serviceID", editService);

router.use("/adrian", (req, res) => {
  console.log("llegamos a algun lugar--------------#####---------");
});

module.exports = router;
