import { z } from "zod";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"]

export const productSchema = z.object({
  product_id: z.string(),
  title: z.string().nonempty(),
  description: z.string(),
  price: z.number().gt(0),
  category: z.string(),
  image: z.instanceof(File).nullable(),
}).refine(data => !data.image || ACCEPTED_TYPES.includes(data.image.type), "Invalid file type");

export type ProductValues = z.infer<typeof productSchema>;
