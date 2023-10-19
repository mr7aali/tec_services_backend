"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post("/signin", (0, validateRequest_1.default)(auth_validation_1.AuthValidaton.authZodSchema), auth_controller_1.AuthController.login);
router.post("/refresh-token", (0, validateRequest_1.default)(auth_validation_1.AuthValidaton.refreshTokenZodSchema), auth_controller_1.AuthController.refreshToken);
exports.authRoutes = router;
