import { z } from "zod"

const createBookingZodSchema = z.object({
    body: z.object({
        user_id: z.string({ required_error: "user_id is required." }),
        bookingServicesIDs: z.array(z.string({ required_error: "service_id is required." })),
        // bookingdate: z.string({ required_error: "bookingdate is required." }),
        // bookingtime: z.string({ required_error: "bookingtime is required." }),
        status: z.enum(["pending", "accepted", "rejected"]).default("pending")
    })
})
export const BookingValidation = { createBookingZodSchema }