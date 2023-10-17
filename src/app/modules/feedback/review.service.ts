import { Feedback, Service } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const create = async (data: Feedback): Promise<Feedback> => {
    const result = await prisma.feedback.create({
        data,
        include: {
            user: true
        }
    });
   
    return result;
};





export const FeedbackService = {
    create
}