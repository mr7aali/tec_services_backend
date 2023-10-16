import { Content, Service } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const create = async (data: Content): Promise<Content> => {
    const result = await prisma.content.create({ data,});
    console.log(result);
    return result;
};


export const ContentService = {
    create
}