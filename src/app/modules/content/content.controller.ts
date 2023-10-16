import { Content } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { ContentService } from './content.service';







const create = catchAsync(
    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await ContentService.create(data);

        sendResponse<Content>(res, {
            success: true,
            statusCode: 200,
            message: "Content created successfully!",
            data: result
        })
    });








export const ContentController = {
    create
}