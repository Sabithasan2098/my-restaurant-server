import { z } from "zod";

export const cartValidationZodOnCreate = z.object({
  body: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string().trim().url("Invalid image URL"),
    category: z.string().nonempty("Category is required").trim(),
    price: z.number().min(1, "Price must be at least 1 characters"),
    isDeleted: z.boolean().default(false),
  }),
});
