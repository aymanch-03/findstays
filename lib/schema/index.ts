import { z } from "zod"

export type RegisterInputs = z.infer<typeof FormDataRegisterSchema>
export type LoginInputs = z.infer<typeof FormDataLoginSchema>

export const FormDataRegisterSchema = z.object({
  name: z
    .string()
    .min(1, "Name field is required")
    .min(3, "Name must be longer than 3 characters")
    .max(50, "Name must be shorter than 50 characters"),
  email: z
    .string()
    .min(1, "Email field is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password field is required")
    .min(6, "Password must be longer than 6 characters")
    .max(50, "Password must be shorter than 50 characters")
    .regex(/^[a-zA-Z0-9]*$/, "Password must be alphanumerical"),
})

export const FormDataLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password field is required"),
})
