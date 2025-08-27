import { z } from "zod";

export const messageValidationZodOnCreate = z.object({
  body: z.object({
    name: z.string().trim().min(1, "Name must be at least 1 Characters"),
    email: z.string().email("Give your full email address"),
    phone: z.string().min(11, "Phone number must be at least 11 characters"),
    message: z
      .string()
      .max(200, "You can't write message more than 200 letters"),
    isDeleted: z.boolean().default(false),
  }),
});
