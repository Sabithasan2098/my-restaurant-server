import { TMessage } from "./message.interface";
import { MessageModel } from "./message.model";

export const createMessageOnDB = async (data: TMessage) => {
  try {
    const result = await MessageModel.create(data);
    return result;
  } catch (error: any) {
    throw new Error("Database error:" + error.message);
  }
};
