import { Service, User } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { UserService } from './service.service';






const createService = catchAsync(
    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await UserService.createService(data);

        sendResponse<Service>(res, {
            success: true,
            statusCode: 200,
            message: "Service created successfully!",
            data: result
        })
    });








export const ServiceController = {
    createService
}