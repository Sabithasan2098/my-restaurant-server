import { Types } from "mongoose";
import { TMenu } from "./menu.interface";
import { MenuModel } from "./menu.model";

export const getAllMenuFromDB = async () => {
  try {
    const result = await MenuModel.find();
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// create menu item------------>
export const createMenuIntoDB = async (data: TMenu) => {
  try {
    const result = await MenuModel.create(data);
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};

// get menu item------------>
export const getMenuIntoDB = async (id: string) => {
  try {
    // const result = await MenuModel.aggregate([{ $match: { _id: id } }]);
    const result = await MenuModel.findById(id);
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error("Database error:" + error.message);
  }
};

// delete menu item------------>
export const deleteMenuIntoDB = async (id: string) => {
  try {
    // const result = await MenuModel.aggregate([{ $match: { _id: id } }]);
    const result = await MenuModel.findByIdAndUpdate(
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
