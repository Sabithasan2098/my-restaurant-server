import { TCart } from "./cart.interface";
import { CartModel } from "./cart.model";

export const getAllCartFromDB = async () => {
  try {
    const result = await CartModel.find();
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// create Cart item------------>
export const createCartIntoDB = async (data: TCart) => {
  try {
    const result = await CartModel.create(data);
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// get Cart item------------>
export const getCartIntoDB = async (id: string) => {
  try {
    const result = await CartModel.findById(id);
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error("Database error:" + error.message);
  }
};

// delete Cart item------------>
export const deleteCartIntoDB = async (id: string) => {
  try {
    const result = await CartModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, upsert: true }
    );
    return "Successfully delete selected item";
  } catch (error: any) {
    console.log(error);
    throw new Error("Database error:" + error.message);
  }
};
