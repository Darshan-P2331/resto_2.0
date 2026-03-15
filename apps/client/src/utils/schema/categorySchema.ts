import { z } from "zod";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const categorySchema = z
  .object({
    name: z.string(),
    image: z.instanceof(File).nullable(),
  })
  .refine((data) => !data.image || ACCEPTED_TYPES.includes(data.image.type));

export type CategoryValues = z.infer<typeof categorySchema>;
