import z from "zod";

export const SteamSchema = z.object({
    discount: z.string(),
    original_price: z.string(),
    price: z.string(),
    title: z.string(),
    url: z.string()
});

export type SteamResponse = z.infer<typeof SteamSchema>;