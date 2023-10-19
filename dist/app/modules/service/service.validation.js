"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        service_name: zod_1.z.string({ required_error: "servicename is required" }),
        category: zod_1.z.string({ required_error: "category is required" }),
        description: zod_1.z.string({ required_error: "description is required" }),
        price: zod_1.z.string({ required_error: "price is required" }),
        availability: zod_1.z.string({ required_error: "availability is required" }).optional(),
    })
});
exports.ServiceValidation = {
    createServiceZodSchema
};
