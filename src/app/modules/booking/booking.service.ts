import { Booking, Service } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const create = async (data: Booking): Promise<Booking> => {
    const result = await prisma.booking.create({ data, include: { service: true, user: true } });
 
    return result;
};


export const BookingService = {
    create
}