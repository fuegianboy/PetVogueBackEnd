const { Router } = require("express");
const servicesRouter = Router();

//controllers imports
const { getServices } = require("../controllers/services/getServices");
const { createService } = require("../controllers/services/createService");
const { deleteService } = require("../controllers/services/deleteService");
const { restoreService } = require("../controllers/services/restoreService");
const { updateService } = require("../controllers/services/updateService");

//routes
servicesRouter.post("/create", createService);
servicesRouter.delete("/delete/:serviceID", deleteService);
servicesRouter.post("/get", getServices);
servicesRouter.put("/update/:serviceID", updateService);
servicesRouter.patch("/restore/:serviceID", restoreService);

module.exports = servicesRouter;
