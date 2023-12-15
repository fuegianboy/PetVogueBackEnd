const { Router } = require("express");

//product
const createProduct  = require('../controllers/product/postProduct');
const {getProduct} = require ('../controllers/product/getProducts')
const {deleteProduct} = require('../controllers/product/deleteProduct')
const {activateProduct} = require('../controllers/product/activateProduct')
const {editProduct} = require('../controllers/product/editProduct');
const productRoutes = Router();

productRoutes.post("/crear", createProduct);
productRoutes.get("/",  getProduct);
productRoutes.delete("/delete/:productID", deleteProduct)
productRoutes.delete("/activate/:productID", activateProduct)
productRoutes.put("/edit/:productID", editProduct);

module.exports = productRoutes;


