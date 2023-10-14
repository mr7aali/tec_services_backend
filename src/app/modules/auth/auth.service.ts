import { User } from "@prisma/client"

import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

import { createToken, verifyToken } from "../../../helpers/jwtHelpers";
import { ILoginResponse, IRefreshTokenResponse, Itoken } from "./auth.interface";
import { prisma } from "../../../sheared/prisma";




const login = async (data: Partial<User>): Promise<ILoginResponse> => {
    const isExits = await prisma.user.findUnique({
        where: {
            email: data.email
        },
        select: {
            user_id: true
        }
    });
    if (!isExits) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const result = await prisma.user.findUnique({
        where: {
            email: data.email,
            password: data.password
        },
        select: {
            email: true,
            password: true,
            user_id: true,
            role: true
        }
    })
    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Wroung passwoard, Try again!");
    }


    const Tokendata: Itoken = {
        role: result.role,
        user_id: result.user_id
    }



    const accessToken = createToken(Tokendata, "access_Token_secret", { expiresIn: '1d' });
    const refreshToken = createToken(Tokendata, "refreshToken_secret", { expiresIn: "365d" });



    return {
        accessToken,
        refreshToken
    };
}

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {

  
    const verifiedToken = verifyToken(token, "refreshToken_secret")
  
    if (verifiedToken && 'user_id' in verifiedToken) {

        const isUserExist = await prisma.user.findUnique({
            where: {
                user_id: verifiedToken.user_id
            }
        });

        if (!isUserExist) {
            throw new ApiError(httpStatus.NOT_FOUND, "User does not exist")
        }
    }

    // create new AccessToken
    const Tokendata: Itoken = {
        role: verifiedToken.role,
        user_id: verifiedToken.user_id,
    }

    const newAccessToken = createToken(Tokendata, "access_Token_secret", { expiresIn: '1d' });


    return {
        accessToken: newAccessToken
    }

}



export const AuthService = {
    login, refreshToken
}