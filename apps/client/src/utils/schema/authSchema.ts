import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Customer name is required"),
    email: z.email(),
    password: z.string().min(8, "Password must be atleast 8 characters"),
    // .regex(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
    //   "Password must contain uppercase, lowercase, number, and special character",
    // ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;


export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be atleast 8 characters")
  // .regex(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
    //   "Password must contain uppercase, lowercase, number, and special character",
    // ),
})

export type SignInFormValues = z.infer<typeof signInSchema>

export const forgotPasswordSchema = z.object({
  email: z.email(),
})

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be atleast 8 characters"),
    // .regex(
    //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/,
    //   "Password must contain uppercase, lowercase, number, and special character",
    // ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>