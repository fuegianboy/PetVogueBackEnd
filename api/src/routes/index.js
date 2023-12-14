const { Router } = require("express");
//product
const createProduct  = require('../controllers/product/postProduct');
const allProduct = require('../controllers/product/getAllProducts')
const name = require ('../controllers/product/getProducts')
const {deleteProduct} = require('../controllers/product/deleteProduct')
const {activateProduct} = require('../controllers/product/activateProduct')
const {editProduct} = require('../controllers/product/editProduct');
//review
const createReview = require("../controllers/review/postReview");
const { deleteReview } = require("../controllers/review/deleteReview");
const { activateReview } = require("../controllers/review/activateReview");
const allReview = require("../controllers/review/allReviews");




const router = Router();

router.use("/adrian", (req, res) => {
    console.log("Llegamos a algún lugar--------------#####---------");
});

//ruta del product
router.post("/crear", createProduct);
router.get("/", allProduct);
router.get("/name",  name);
router.delete("/product/delete/:productID", deleteProduct)
router.delete("/product/activate/:productID", activateProduct)
router.put("/product/edit/:productID", editProduct);


//ruta del review
router.post("/crearReview", createReview)
router.delete("/review/delete/:reviewID", deleteReview)
router.delete("/review/activate/:reviewID", activateReview) 
router.get("/review", allReview)

module.exports = router;
