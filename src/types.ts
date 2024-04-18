import { z } from 'zod';

export const tourSchema = z.object({
  id: z.string(),
  img: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;
