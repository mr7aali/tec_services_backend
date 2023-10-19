"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = require("../../../sheared/prisma");
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExits = yield prisma_1.prisma.user.findUnique({
        where: {
            email: data.email
        },
        select: {
            user_id: true
        }
    });
    if (!isExits) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const result = yield prisma_1.prisma.user.findUnique({
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
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Wroung passwoard, Try again!");
    }
    const Tokendata = {
        role: result.role,
        user_id: result.user_id
    };
    const accessToken = (0, jwtHelpers_1.createToken)(Tokendata, "access_Token_secret", { expiresIn: '1d' });
    const refreshToken = (0, jwtHelpers_1.createToken)(Tokendata, "refreshToken_secret", { expiresIn: "365d" });
    return {
        accessToken,
        refreshToken
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const verifiedToken = (0, jwtHelpers_1.verifyToken)(token, "refreshToken_secret");
    if (verifiedToken && 'user_id' in verifiedToken) {
        const isUserExist = yield prisma_1.prisma.user.findUnique({
            where: {
                user_id: verifiedToken.user_id
            }
        });
        if (!isUserExist) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not exist");
        }
    }
    // create new AccessToken
    const Tokendata = {
        role: verifiedToken.role,
        user_id: verifiedToken.user_id,
    };
    const newAccessToken = (0, jwtHelpers_1.createToken)(Tokendata, "access_Token_secret", { expiresIn: '1d' });
    return {
        accessToken: newAccessToken
    };
});
exports.AuthService = {
    login, refreshToken
};
