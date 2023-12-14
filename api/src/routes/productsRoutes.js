const { Router } = require("express");

//product
const createProduct  = require('../controllers/product/postProduct');
const allProduct = require('../controllers/product/getAllProducts')
const name = require ('../controllers/product/getProducts')
const {deleteProduct} = require('../controllers/product/deleteProduct')
const {activateProduct} = require('../controllers/product/activateProduct')
const {editProduct} = require('../controllers/product/editProduct');
const productRouter = Router();

productRouter.post("/crear", createProduct);
productRouter.get("/", allProduct);
productRouter.get("/name",  name);
productRouter.delete("/product/delete/:productID", deleteProduct)
productRouter.delete("/product/activate/:productID", activateProduct)
productRouter.put("/product/edit/:productID", editProduct);

module.exports = productRouter;


