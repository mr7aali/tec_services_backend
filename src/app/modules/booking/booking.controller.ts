import { Booking } from '@prisma/client';
import { Request, Response } from "express";
import catchAsync from "../../../sheared/catchAsync";
import sendResponse from "../../../sheared/sendResponse";
import { BookingService } from './booking.service';







const create = catchAsync(
    async (req: Request, res: Response) => {
        const userID = req.body.user_id;
        const serviceIDs = req.body.bookingServicesIDs;
        console.log(userID,serviceIDs);
        const result = await BookingService.create(userID, serviceIDs);

        sendResponse<Booking[]>(res, {
            success: true,
            statusCode: 200,
            message: "Booking created successfully!",
            data: result
        })
    });








export const BookingController = {
    create
}