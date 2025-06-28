import { z } from "zod";

export const menuValidationZodOnCreate = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, "Menu name must be at least 3 characters")
      .max(25, "Menu name could not more than 25 characters")
      .trim()
      .refine((value) => /^[A-Z]/.test(value), {
        message: "Menu name must start with a capital letter",
      }),
    recipe: z
      .string()
      .min(65, "Recipe must be at least 65 characters")
      .trim()
      .refine((value) => /^[A-Z]/.test(value), {
        message: "Recipe must start with a capital letter",
      }),
    image: z.string().trim().url("Invalid image URL"),

    category: z.string().nonempty("Category is required").trim(),
    price: z.number().min(1, "Price must be at least 1 characters"),
    isDeleted: z.boolean(),
  }),
});
