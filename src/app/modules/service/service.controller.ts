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

const getAll = catchAsync(
    async (req: Request, res: Response) => {


        const result = await UserService.getAll();

        sendResponse<Service[]>(res, {
            success: true,
            statusCode: 200,
            message: "all service get successfully!",
            data: result
        })
    });

const getSingle = catchAsync(
    async (req: Request, res: Response) => {

        const id = req.params.id;
        const result = await UserService.getSingle(id);

        sendResponse<Service | null>(res, {
            success: true,
            statusCode: 200,
            message: "Single service get successfully!",
            data: result
        })
    });








export const ServiceController = {
    createService,
    getAll,
    getSingle
}