import { model, Schema } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// mongoose-hook
cartSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
cartSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
cartSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const CartModel = model<TCart>("Cart", cartSchema);
