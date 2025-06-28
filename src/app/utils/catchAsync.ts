import { Request, RequestHandler } from "express";
import { sendResponse } from "./sendResponse";

type serviceFunction<T> = (req: Request) => Promise<T>;

export const catchAsync = <T>(
  serviceFunction: serviceFunction<T>,
  successMessage: string
): RequestHandler => {
  return async (req, res, next) => {
    try {
      const result = await serviceFunction(req);
      // console.log("From service funtion:", result);
      sendResponse(res, {
        statusCode: 200,
        message: successMessage,
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
};
