import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(6),
  category: z.string(),
  brand: z.string(),
  thumbnail: z.string().url(),
  price: z.number().nonnegative(),
  discount: z.number().optional(),
  description: z.string().optional(),
});
