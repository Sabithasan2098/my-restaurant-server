import { catchAsync } from "../../utils/catchAsync";
import {
  createReviewIntoDB,
  deleteReviewIntoDB,
  getAllReviewFromDB,
  getReviewIntoDB,
} from "./review.service";

// import { ObjectId } from "mongoose";

// get-all-Review------------------------>
export const getAllReview = catchAsync(
  getAllReviewFromDB,
  "Successfully fetch  all Review data"
);

// create-Review-data------------------------>
export const createReview = catchAsync(async (req) => {
  return await createReviewIntoDB(req.body);
}, "Successfully create Review data");

// get-Review-data------------------------>
export const getReview = catchAsync(async (req) => {
  const reviewId = req.params.reviewId;
  return await getReviewIntoDB(reviewId);
}, "Successfully get Review data");

// delete-Review-data------------------------>
export const deleteReview = catchAsync(async (req) => {
  const reviewId = req.params.reviewId;
  return await deleteReviewIntoDB(reviewId);
}, "Successfully delete selected item");
