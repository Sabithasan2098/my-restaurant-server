import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import {
  createReview,
  deleteReview,
  getAllReview,
  getReview,
} from "./review.controller";
import { reviewValidationZodOnCreate } from "./review.validation";

const router = express.Router();

// get-all-Review----------------------->
router.get("/get-all-review", getAllReview);

// create-Review-data----------------------->
router.post(
  "/create-review-data",
  validateRequest(reviewValidationZodOnCreate),
  createReview
);

// get-Review-data----------------------->
router.get("/:reviewId", getReview);

// delete-Review-data----------------------->
router.delete("/:reviewId", deleteReview);

export const reviewRoutes = router;
