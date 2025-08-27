import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";
import { boolean } from "zod";

const messageSchema = new Schema<TMessage>({
  name: {
    type: String,
    required: [true, "Name is a required field"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone is a required field"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is a required field"],
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// mongoose hook

messageSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

messageSchema.pre("findOne", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

messageSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const MessageModel = model<TMessage>("Message", messageSchema);
