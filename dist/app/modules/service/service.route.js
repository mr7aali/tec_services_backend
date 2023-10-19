"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.default)(service_validation_1.ServiceValidation.createServiceZodSchema), service_controller_1.ServiceController.createService);
router.get("/get", service_controller_1.ServiceController.getAll);
router.get("/:id", service_controller_1.ServiceController.getSingle);
exports.ServiceRoute = router;
