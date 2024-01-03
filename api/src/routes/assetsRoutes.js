const { Router } = require('express');

const {createAsset} = require("../controllers/assets/createAsset")
const {deleteAsset} = require("../controllers/assets/deleteAsset")
const {getAsset} = require("../controllers/assets/getAsset")
const {updateAsset} = require("../controllers/assets/updateAsset")
const {restoreAsset} = require("../controllers/assets/restoreAsset")


const assetsRoutes = Router();

assetsRoutes.post("/", createAsset)
assetsRoutes.delete("/:id", deleteAsset)
assetsRoutes.get("/", getAsset)
assetsRoutes.put("/:id", updateAsset)
assetsRoutes.patch("/:id", restoreAsset)

module.exports = assetsRoutes;


