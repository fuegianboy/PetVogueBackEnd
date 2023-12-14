//review
const { Router } = require("express");
const createReview = require("../controllers/review/postReview");
const { deleteReview } = require("../controllers/review/deleteReview");
const { activateReview } = require("../controllers/review/activateReview");
const allReview = require("../controllers/review/allReviews");

const reviewsRouter = Router();


reviewsRouter.post("/crearReview", createReview)
reviewsRouter.delete("/review/delete/:reviewID", deleteReview)
reviewsRouter.delete("/review/activate/:reviewID", activateReview) 
reviewsRouter.get("/review", allReview)

module.exports = reviewsRouter;