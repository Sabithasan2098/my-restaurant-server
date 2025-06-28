import { catchAsync } from "../../utils/catchAsync";
import {
  createCartIntoDB,
  deleteCartIntoDB,
  getAllCartFromDB,
  getCartIntoDB,
} from "./cart.service";
// import { ObjectId } from "mongoose";

// get-all-Cart------------------------>
export const getAllCart = catchAsync(
  getAllCartFromDB,
  "Successfully fetch  all cart data"
);

// create-Cart-data------------------------>
export const createCart = catchAsync(async (req) => {
  return await createCartIntoDB(req.body);
}, "Successfully create cart data");

// get-Cart-data------------------------>
export const getCart = catchAsync(async (req) => {
  const cartId = req.params.cartId;
  return await getCartIntoDB(cartId);
}, "Successfully get cart data");

// delete-Cart-data------------------------>
export const deleteCart = catchAsync(async (req) => {
  const cartId = req.params.cartId;
  return await deleteCartIntoDB(cartId);
}, "Successfully delete selected item");
