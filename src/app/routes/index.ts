import { Router } from "express";
import { menuRoutes } from "../modules/menu/menu.route";
import { cartRoutes } from "../modules/cart/cart.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/menu",
    route: menuRoutes,
  },
  {
    path: "/cart",
    route: cartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
