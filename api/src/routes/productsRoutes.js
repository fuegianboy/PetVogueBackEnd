const { Router } = require("express");

//product
const createProduct  = require('../controllers/product/postProduct');
const {getProduct} = require ('../controllers/product/getProducts')
const {deleteProduct} = require('../controllers/product/deleteProduct')
const {restoreProduct} = require('../controllers/product/restoreProduct')
const {editProduct} = require('../controllers/product/editProduct');
const productRoutes = Router();

productRoutes.post("/create", createProduct);
productRoutes.delete("/delete/:productID", deleteProduct)
productRoutes.post("/get",  getProduct);
productRoutes.put("/update/:productID", editProduct);
productRoutes.patch("/restore/:productID", restoreProduct)

module.exports = productRoutes;


