//review
const { Router } = require("express");
const createReview = require("../controllers/review/postReview");
const { deleteReview } = require("../controllers/review/deleteReview");
const { activateReview } = require("../controllers/review/activateReview");
const allReview = require("../controllers/review/allReviews");
const getReviews = require("../controllers/review/getReviews");

const reviewsRoutes = Router();


reviewsRoutes.post("/create", createReview)
reviewsRoutes.delete("/delete/:reviewID", deleteReview)
reviewsRoutes.delete("/activate/:reviewID", activateReview) 
reviewsRoutes.get("/get", allReview)
reviewsRoutes.post("/get", getReviews)


module.exports = reviewsRoutes;