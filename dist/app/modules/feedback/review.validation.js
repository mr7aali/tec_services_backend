"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidation = void 0;
const zod_1 = require("zod");
const createFeedbackZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "user_id is required." }),
        subject: zod_1.z.string({ required_error: "subject is required." }),
        comment: zod_1.z.string({ required_error: "comment is required." }),
        feedbackdate: zod_1.z.string({ required_error: "feedbackdate is required." })
    })
});
exports.FeedbackValidation = {
    createFeedbackZodSchema
};
