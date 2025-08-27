import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { messageValidationZodOnCreate } from "./message.validation";
import { createMessage } from "./message.controller";
const router = express.Router();

router.post(
  "/create-message",
  validateRequest(messageValidationZodOnCreate),
  createMessage
);

export const messageRoutes = router;
