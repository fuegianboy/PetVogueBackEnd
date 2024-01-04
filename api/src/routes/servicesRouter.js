const { Router } = require("express");
const servicesRouter = Router();

//controllers imports
const { getServices } = require("../controllers/services/getServices");
const { createService } = require("../controllers/services/createService");
const { deleteService } = require("../controllers/services/deleteService");
const { restoreService } = require("../controllers/services/restoreService");
const { updateService } = require("../controllers/services/updateService");

//routes
servicesRouter.post("/get", getServices);
servicesRouter.post("/create", createService);
servicesRouter.delete("/delete/:serviceID", deleteService);
servicesRouter.patch("/restore/:serviceID", restoreService);
servicesRouter.put("/update/:serviceID", updateService);

module.exports = servicesRouter;
