import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';

const router = express.Router();


router.post("/create",
    validateRequest(BookingValidation.createBookingZodSchema),
    BookingController.create);


export const BookingRoute = router;