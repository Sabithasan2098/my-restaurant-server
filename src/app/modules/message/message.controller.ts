import { catchAsync } from "../../utils/catchAsync";
import { createMessageOnDB } from "./message.service";

export const createMessage = catchAsync(async (req) => {
  return await createMessageOnDB(req.body);
}, "Successfully sent message");
