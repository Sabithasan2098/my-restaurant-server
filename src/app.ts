import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// application routes------------------->
app.use("/api", router);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, dear i am coming");
});

// globalErrorHandler
app.use(globalErrorHandler);

export default app;
