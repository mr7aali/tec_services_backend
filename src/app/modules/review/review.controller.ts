import { Review} from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { ReviewService } from './review.service';







const create= catchAsync(
    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await ReviewService.create(data);

        sendResponse<Review>(res, {
            success: true,
            statusCode: 200,
            message: "Review created successfully!",
            data: result
        })
    });








export const ReviewController = {
    create
}