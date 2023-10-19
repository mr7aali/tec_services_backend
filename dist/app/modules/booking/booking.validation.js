"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const createBookingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string({ required_error: "user_id is required." }),
        service_id: zod_1.z.string({ required_error: "service_id is required." }),
        bookingdate: zod_1.z.string({ required_error: "bookingdate is required." }),
        bookingtime: zod_1.z.string({ required_error: "bookingtime is required." }),
        status: zod_1.z.string({ required_error: "status is required." }),
    })
});
exports.BookingValidation = { createBookingZodSchema };
