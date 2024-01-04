const { Router } = require("express");
const petRouter = Router();

//controllers imports
const getPets = require("../controllers/pets/getPets");
const createPet = require("../controllers/pets/createPets");
const deletePet = require("../controllers/pets/deletePet");
const restorePet = require("../controllers/pets/restorePet");
const updatePet = require("../controllers/pets/updatePet");

//routes
petRouter.post("/create", createPet);
petRouter.delete("/delete/:petID", deletePet);
petRouter.post("/get", getPets);
petRouter.put("/update/:petID", updatePet);
petRouter.patch("/restore/:petID", restorePet);

module.exports = petRouter;
