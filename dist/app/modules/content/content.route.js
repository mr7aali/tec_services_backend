"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const content_validation_1 = require("./content.validation");
const content_controller_1 = require("./content.controller");
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.default)(content_validation_1.ContentValidation.createContentZodSchema), content_controller_1.ContentController.create);
exports.ContentRoute = router;
