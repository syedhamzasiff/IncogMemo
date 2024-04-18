import { z } from 'zod'

export const messageSchema = z.object({
    content: z.
    string()
    .min(0, "content should not be empty")
    .max(300, "Content must be no longer than 300 characters")
})