import { z } from "zod";

const createFeedbackZodSchema = z.object({
    body: z.object({
        user_id: z.string({ required_error: "user_id is required." }),
        subject: z.string({ required_error: "subject is required." }),
        comment: z.string({ required_error: "comment is required." }),
        feedbackdate: z.string({ required_error: "feedbackdate is required." })
    })
});



export const FeedbackValidation = {
    createFeedbackZodSchema
}