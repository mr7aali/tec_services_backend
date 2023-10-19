"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentValidation = void 0;
const zod_1 = require("zod");
const createContentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "title is required." }),
        body: zod_1.z.string({ required_error: "body is required." }),
        type: zod_1.z.string({ required_error: "type is required." }),
        admin_id: zod_1.z.string({ required_error: "admin_id is required." }),
    })
});
exports.ContentValidation = { createContentZodSchema };
