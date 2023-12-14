const { Router } = require("express");
const servicesRouter = Router();

//controllers imports
const getActiveServices = require("../controllers/services/getActiveServices");
const getInactiveServices = require("../controllers/services/getInactiveService");
const getAllServices = require("../controllers/services/getAllServices");
const getServiceById = require("../controllers/services/getServiceById");
const createService = require("../controllers/services/createService");
const deleteService = require("../controllers/services/deleteService");
const restoreService = require("../controllers/services/restoreService");
const editService = require("../controllers/services/editService");

//routes
servicesRouter.get("/", getActiveServices);
servicesRouter.get("/inactive", getInactiveServices);
servicesRouter.get("/all", getAllServices);
servicesRouter.get("/:serviceID", getServiceById);
servicesRouter.post("/create", createService);
servicesRouter.delete("/delete/:serviceID", deleteService);
servicesRouter.put("/restore/:serviceID", restoreService);
servicesRouter.put("/edit/:serviceID", editService);

module.exports = servicesRouter;
