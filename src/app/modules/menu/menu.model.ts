import { model, Schema } from "mongoose";
import { TMenu } from "./menu.interface";

const menuSchema = new Schema<TMenu>({
  name: {
    type: String,
    required: [true, "Name is required"],
    // unique: true,
    trim: true,
  },
  recipe: {
    type: String,
    required: [true, "Recipe is required"],
    // unique: true,
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
    // unique: true,
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
menuSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
menuSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
menuSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const MenuModel = model<TMenu>("Menu", menuSchema);
