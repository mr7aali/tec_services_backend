import { z } from "zod"

const createContentZodSchema = z.object({
    body: z.object({
        title: z.string({ required_error: "title is required." }),
        body: z.string({ required_error: "body is required." }),
        type: z.string({ required_error: "type is required." }),
        admin_id: z.string({ required_error: "admin_id is required." }),
    })
})
export const ContentValidation = { createContentZodSchema }