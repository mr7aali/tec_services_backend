"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "user_id is required" }),
        service_id: zod_1.z.string({ required_error: "service_id is required" }),
        rating: zod_1.z.number({ required_error: "rating is required" }),
        comment: zod_1.z.string({ required_error: "comment is required" }),
        reviewdate: zod_1.z.string({ required_error: "reviewdate is required" }),
    })
});
exports.ReviewValidation = {
    createReviewZodSchema
};
