import { string, z } from "zod";

const createUserZodSchema = z.object({
    body: z.object({
        servicename: z.string({ required_error: "servicename is required" }),
        category: z.string({ required_error: "category is required" }),
        description: z.string({ required_error: "description is required" }),
        price: z.string({ required_error: "price is required" }),
        availability: z.string({ required_error: "availability is required" }).optional(),
    })
});