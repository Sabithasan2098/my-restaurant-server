import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { createCart, deleteCart, getAllCart, getCart } from "./cart.controller";
import { cartValidationZodOnCreate } from "./cart.validation";
const router = express.Router();

// get-all-cart----------------------->
router.get("/get-all-cart", getAllCart);

// create-cart-data----------------------->
router.post(
  "/create-cart-data",
  validateRequest(cartValidationZodOnCreate),
  createCart
);

// get-cart-data----------------------->
router.get("/:cartId", getCart);

// delete-cart-data----------------------->
router.delete("/:cartId", deleteCart);

export const cartRoutes = router;
