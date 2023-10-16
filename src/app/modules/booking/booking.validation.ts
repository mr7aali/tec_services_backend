import { z } from "zod"

const createBookingZodSchema = z.object({
    body: z.object({
        user_id: z.string({ required_error: "user_id is required." }),
        service_id: z.string({ required_error: "service_id is required." }),
        bookingdate: z.string({ required_error: "bookingdate is required." }),
        bookingtime: z.string({ required_error: "bookingtime is required." }),
        status: z.string({ required_error: "status is required." }),
    })
})
export const BookingValidation = { createBookingZodSchema }