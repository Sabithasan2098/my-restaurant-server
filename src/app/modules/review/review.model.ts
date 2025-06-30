import { model, Schema } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  details: {
    type: String,
    required: [true, "details is required"],
    trim: true,
  },
  rating: {
    type: String,
    required: [true, "rating is required"],
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// mongoose-hook
reviewSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
reviewSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
reviewSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const ReviewModel = model<TReview>("Review", reviewSchema);
