import { Admin, User } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { UserService } from './user.service';



const createUser = catchAsync(
    async (req: Request, res: Response) => {
        const result = await UserService.createUser(req.body);
        sendResponse<Partial<User>>(res, {
            success: true,
            statusCode: 200,
            message: "User created successfully!",
            data: result
        })
    });
const createAdmin = catchAsync(
    async (req: Request, res: Response) => {
        const result = await UserService.createAdmin(req.body);
        sendResponse<Admin>(res, {
            success: true,
            statusCode: 200,
            message: "Admin created successfully!",
            data: result
        })
    });

const getSingle = catchAsync(
    async (req: Request, res: Response) => {

        const id = req.params.id;
        const result = await UserService.getSingle(id);



        sendResponse<Partial<User>>(res, {
            success: true,
            statusCode: 200,
            message: "User get successfully!",
            data: result
        })
    });

const update = catchAsync(
    async (req: Request, res: Response) => {

        const id = req.params.id;
        const data = req.body;
        const result = await UserService.update(id, data);



        sendResponse<Partial<User>>(res, {
            success: true,
            statusCode: 200,
            message: "User get successfully!",
            data: result
        })
    });







export const UserController = {
    createUser,
    getSingle,
    update,
    createAdmin
}