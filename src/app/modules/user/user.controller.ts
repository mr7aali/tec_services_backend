import { User } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { UserService } from './user.service';





const createUser = catchAsync(
    async (req: Request, res: Response) => {
        const result = await UserService.createUser(req.body);



        sendResponse<User>(res, {
            success: true,
            statusCode: 200,
            message: "User created successfully!",
            data: result
        })
    });


    




export const UserController = {
    createUser
}