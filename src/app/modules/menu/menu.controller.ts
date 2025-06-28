import {
  createMenuIntoDB,
  deleteMenuIntoDB,
  getAllMenuFromDB,
  getMenuIntoDB,
} from "./menu.service";
import { catchAsync } from "../../utils/catchAsync";
// import { ObjectId } from "mongoose";

// get-all-menu------------------------>
export const getAllMenu = catchAsync(
  getAllMenuFromDB,
  "Successfully fetch  all menu data"
);

// create-menu-data------------------------>
export const createMenu = catchAsync(async (req) => {
  return await createMenuIntoDB(req.body);
}, "Successfully create menu data");

// get-menu-data------------------------>
export const getMenu = catchAsync(async (req) => {
  const menuId = req.params.menuId;
  return await getMenuIntoDB(menuId);
}, "Successfully get menu data");

// delete-menu-data------------------------>
export const deleteMenu = catchAsync(async (req) => {
  const menuId = req.params.menuId;
  return await deleteMenuIntoDB(menuId);
}, "Successfully delete selected item");
