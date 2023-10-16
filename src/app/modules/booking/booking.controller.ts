import { Booking } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { BookingService } from './booking.service';







const create = catchAsync(
    async (req: Request, res: Response) => {

        const data = req.body;
        const result = await BookingService.create(data);

        sendResponse<Booking>(res, {
            success: true,
            statusCode: 200,
            message: "Booking created successfully!",
            data: result
        })
    });








export const BookingController = {
    create
}