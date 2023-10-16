import { Feedback} from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { FeedbackService } from './review.service';








const create= catchAsync(
    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await FeedbackService.create(data);

        sendResponse<Feedback>(res, {
            success: true,
            statusCode: 200,
            message: "Feedback created successfully!",
            data: result
        })
    });








export const FeedbackController = {
    create
}