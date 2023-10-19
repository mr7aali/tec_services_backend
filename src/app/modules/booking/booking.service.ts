import { Booking, Service } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const create = async (userID: string, serviceIDs: string[]):Promise<Booking[]> => {
    const currentDate = new Date();
    const data = [
        {
            user_id: userID,
            bookingdate: new Date(),
            bookingtime: "none",
            status: 'pending'
        }
    ]
    const bookingData = data.map((item) => {
        return serviceIDs.map((service_id) => {
            return {
                ...item,
                service_id
            };
        });
    }).flat();

    let result =[]
    for (const booking of bookingData) {
        const singleResult = await prisma.booking.create({
            data: booking,
        });
        result.push(singleResult); 
    }

return result;

};


export const BookingService = {
    create
}