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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = require("../../../sheared/prisma");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.create({
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
    });
    return result;
});
const createAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
        // Update the user's role to "admin"
        yield prisma.user.update({
            where: { user_id: data.user_id },
            data: {
                role: "admin"
            }
        });
        // Create the admin user
        const adminResult = yield prisma.admin.create({
            data
        });
        return adminResult;
    }));
    return result;
});
const getSingle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.findUnique({
        where: { user_id: id }, include: {}
    });
    return result;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.update({
        where: { user_id: id }, data
    });
    return result;
});
exports.UserService = {
    createUser,
    getSingle,
    update, createAdmin
};
