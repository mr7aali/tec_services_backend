import { Service} from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const createService = async (data: Service): Promise<Service> => {
    const result = await prisma.service.create({ data });
    console.log(result);
    return result;
};

const getAll = async (): Promise<Service[]> => {
    const result = await prisma.service.findMany({  });
    console.log(result);
    return result;
};
const getSingle = async (id: string): Promise<Service|null> => {
    const result = await prisma.service.findUnique({
        where:{
            service_id:id
        }
    });
    console.log(result);
    return result;
};





export const UserService = {
    createService,
    getAll,
    getSingle
}