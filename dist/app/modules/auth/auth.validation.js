"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidaton = void 0;
const zod_1 = require("zod");
const authZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: "Email is required." }),
        password: zod_1.z.string({ required_error: "Password is required." })
    })
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({ required_error: "refreshToken is required." })
    })
});
exports.AuthValidaton = {
    authZodSchema, refreshTokenZodSchema
};
