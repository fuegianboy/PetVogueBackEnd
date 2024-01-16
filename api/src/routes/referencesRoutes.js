const { Router } = require('express');

const {createReference} = require("../controllers/references/createReference")
const {deleteReference} = require("../controllers/references/deleteReference")
const {getReferenceById} = require("../controllers/references/getReference")

const referencesRoutes = Router();

referencesRoutes.post("/create", createReference)
referencesRoutes.delete("/delete/:id", deleteReference)
referencesRoutes.post("/get", getReferenceById)

module.exports = referencesRoutes;


