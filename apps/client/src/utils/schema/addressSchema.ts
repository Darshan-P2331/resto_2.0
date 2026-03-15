import { z } from 'zod'

export const addressSchema = z.object({
  firstName: z.string().min(2, "First Name is required."),
  lastName: z.string(),
  address: z.string().min(5, "Address is required."),
  city: z.string().min(2, "City is required."),
  pinCode: z.string().regex(/^[1-9][0-9]{5}$/, "Invalid pincode")
})

export type AddressValues = z.infer<typeof addressSchema>