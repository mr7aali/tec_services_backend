import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';



const router = express.Router();


router.post("/create",
    validateRequest(ServiceValidation.createServiceZodSchema),
    ServiceController.createService);
router.get("/get",
    ServiceController.getAll);
router.get("/:id",
    ServiceController.getSingle);


export const ServiceRoute = router;