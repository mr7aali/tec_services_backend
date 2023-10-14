import { User } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';







const createUser = async (data: User): Promise<User> => {


console.log(data);
    const result = await prisma.user.create({ data })
  


    return result;


};





export const UserService = {
    createUser
}