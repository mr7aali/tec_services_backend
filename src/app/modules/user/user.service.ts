import { Admin, User } from "@prisma/client"
import { prisma } from '../../../sheared/prisma';


const createUser = async (data: User): Promise<Partial<User>> => {
    const result = await prisma.user.create({
        data,
        select: {
            user_id: true,
            first_name: true,
            last_name: true,
            email: true,
            profileimage: true,
            phone: true,
            role: true,
        }
    })
    return result;
};
const createAdmin = async (data: Admin): Promise<Admin> => {
   
    const result = await prisma.$transaction(async (prisma) => {
        // Update the user's role to "admin"
        await prisma.user.update({
            where: { user_id: data.user_id },
            data: {
                role: "admin"
            }
        });

        // Create the admin user
        const adminResult = await prisma.admin.create({
            data
        });

        return adminResult;
    });

    return result;



};

const getSingle = async (id: string): Promise<User | null> => {

    const result = await prisma.user.findUnique({
        where: { user_id: id },include:{}
    })
    return result;
};
const update = async (id: string, data: User): Promise<User | null> => {

    const result = await prisma.user.update({
        where: { user_id: id }, data
    })
    return result;
};



export const UserService = {
    createUser,
    getSingle,
    update, createAdmin
}