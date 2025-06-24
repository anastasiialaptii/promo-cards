import z from "zod";

const UdemyCourseSchema = z.object({
    name: z.string(),
    category: z.string(),
    image: z.string(),
    actual_price_usd: z.number(),
    sale_price_usd: z.number(),
    sale_end: z.string(),
    description: z.string(),
    url: z.string(),
    clean_url: z.string()
});

export const UdemyResponseSchema = z.object({
    courses: UdemyCourseSchema,
    total: z.number()
});

export type UdemyResponse = z.infer<typeof UdemyResponseSchema>;