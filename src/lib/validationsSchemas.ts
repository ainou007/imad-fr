import { z } from 'zod';

// Create Article Schema
export const createArticleSchema = z.object({
  title: z.string().min(3).max(10),
  body: z.string().min(3).max(1000),
});
