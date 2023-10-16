
import { z } from "zod";

const createUserZodSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "email is required" }),
        password: z.string({ required_error: "password is required" }),
        role: z.enum(['user', 'admin', 'super_admin']).optional(),
        first_name: z.string({ required_error: "first_name is required" }),
        last_name: z.string({ required_error: "last_name is required" }),
        phone: z.string({ required_error: "phone is required" }),
        address: z.string({ required_error: "address is required" }),
        profileimage: z.string({ required_error: "profileimage is required" }).optional(),
    })
});
const UpdateUserZodSchema = z.object({
    body: z.object({
        email: z.string({ required_error: "email is required" }).optional(),
        password: z.string({ required_error: "password is required" }).optional(),
        first_name: z.string({ required_error: "first_name is required" }).optional(),
        last_name: z.string({ required_error: "last_name is required" }).optional(),
        phone: z.string({ required_error: "phone is required" }).optional(),
        address: z.string({ required_error: "address is required" }).optional(),
        profileimage: z.string({ required_error: "profileimage is required" }).optional(),
        role: z.union([z.undefined(), z.null()]).optional()
    })
});

export const UserValidation = {
    createUserZodSchema,UpdateUserZodSchema
}