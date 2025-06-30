import { z } from "zod";

export const reviewValidationZodOnCreate = z.object({
  body: z.object({
    id: z.string(),
    name: z.string(),
    details: z.string().nonempty("Details is required").trim(),
    rating: z.number().min(1, "You have to give more than 1 star"),
    isDeleted: z.boolean().default(false),
  }),
});
