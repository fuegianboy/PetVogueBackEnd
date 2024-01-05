//review
const { Router } = require("express");
const createReview = require("../controllers/review/postReview");
const { deleteReview } = require("../controllers/review/deleteReview");
const { activateReview } = require("../controllers/review/activateReview");
const allReview = require("../controllers/review/allReviews");

const reviewsRoutes = Router();


reviewsRoutes.post("/crear", createReview)
reviewsRoutes.delete("/review/delete/:reviewID", deleteReview)
reviewsRoutes.delete("/review/activate/:reviewID", activateReview) 
reviewsRoutes.get("/review", allReview)

module.exports = reviewsRoutes;