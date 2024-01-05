const { Router } = require('express');

const {createAsset} = require("../controllers/assets/createAsset")
const {deleteAsset} = require("../controllers/assets/deleteAsset")
const {getAsset} = require("../controllers/assets/getAsset")
const {updateAsset} = require("../controllers/assets/updateAsset")
const {restoreAsset} = require("../controllers/assets/restoreAsset")


const assetsRoutes = Router();

assetsRoutes.post("/create", createAsset)
assetsRoutes.delete("/delete/:id", deleteAsset)
assetsRoutes.post("/get", getAsset)
assetsRoutes.put("/update/:id", updateAsset)
assetsRoutes.patch("/restore/:id", restoreAsset)

module.exports = assetsRoutes;


