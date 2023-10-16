import express from 'express';
import { ServiceController } from './service.controller';



const router = express.Router();


router.post("/create", ServiceController.createService);


export const ServiceRoute = router;