import { z } from "zod";

const createReviewZodSchema = z.object({
    body: z.object({
        user_id: z.string({ required_error: "user_id is required" }),
        service_id: z.string({ required_error: "service_id is required" }),
        rating: z.number({ required_error: "rating is required" }),
        comment: z.string({ required_error: "comment is required" }),
        reviewdate: z.string({ required_error: "reviewdate is required" }),
    })
});



export const ReviewValidation = {
    createReviewZodSchema
}