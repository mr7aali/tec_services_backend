import { z } from "zod";

const createUserZodSchema = z.object({
    body: z.object({
        username: z.string(),
        email: z.string(),
        role: z.string(),
        password: z.string(),

        firstname: z.string(),
        lastname: z.string(),
        phone: z.string(),
        address: z.string(),
        preferences: z.string(),
        profileimage: z.string(),
    })
})