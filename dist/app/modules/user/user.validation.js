"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
        role: zod_1.z.enum(['user', 'admin', 'super_admin']).optional(),
        first_name: zod_1.z.string({ required_error: "first_name is required" }),
        last_name: zod_1.z.string({ required_error: "last_name is required" }),
        phone: zod_1.z.string({ required_error: "phone is required" }),
        address: zod_1.z.string({ required_error: "address is required" }),
        profileimage: zod_1.z.string({ required_error: "profileimage is required" }).optional(),
    })
});
const UpdateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "email is required" }).optional(),
        password: zod_1.z.string({ required_error: "password is required" }).optional(),
        first_name: zod_1.z.string({ required_error: "first_name is required" }).optional(),
        last_name: zod_1.z.string({ required_error: "last_name is required" }).optional(),
        phone: zod_1.z.string({ required_error: "phone is required" }).optional(),
        address: zod_1.z.string({ required_error: "address is required" }).optional(),
        profileimage: zod_1.z.string({ required_error: "profileimage is required" }).optional(),
        role: zod_1.z.union([zod_1.z.undefined(), zod_1.z.null()]).optional()
    })
});
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "user_id is required" })
    })
});
exports.UserValidation = {
    createUserZodSchema, UpdateUserZodSchema, createAdminZodSchema
};
