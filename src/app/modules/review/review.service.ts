import { Review, Service } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const create = async (data: Review): Promise<Review> => {
    const result = await prisma.review.create({
        data,
        include: {
            service: true,
            user: true
        }
    });
    
    return result;
};





export const ReviewService = {
    create
}