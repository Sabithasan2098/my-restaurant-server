import express from "express";
import { createMenu, deleteMenu, getAllMenu, getMenu } from "./menu.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { menuValidationZodOnCreate } from "./menu.validation";
const router = express.Router();

// get-all-menu----------------------->
router.get("/get-all-menu", getAllMenu);

// create-menu-data----------------------->
router.post(
  "/create-menu-data",
  validateRequest(menuValidationZodOnCreate),
  createMenu
);

// get-menu-data----------------------->
router.get("/:menuId", getMenu);

// delete-menu-data----------------------->
router.delete("/:menuId", deleteMenu);

export const menuRoutes = router;
