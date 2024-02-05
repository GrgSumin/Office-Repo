import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(5, { message: " should be at least 5 words" }),
  lastName: z.string().min(5, { message: " should be at least 5 words" }),
  age: z.number().min(18),
  address: z.string(),
  country: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password should be more than 8 characters" }),
});

export type formSchemas = z.infer<typeof formSchema>;
