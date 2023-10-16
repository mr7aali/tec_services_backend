import { Service, User } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const createService = async (data: Service): Promise<Service> => {
    const result = await prisma.service.create({ data });
    console.log(result);
    return result;
};





export const UserService = {
    createService
}