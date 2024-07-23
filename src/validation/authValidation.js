import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6),
    comfirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.comfirmPassword, {
    message: "Password does not match",
    path: ["comfirmPassword"],
  });

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
