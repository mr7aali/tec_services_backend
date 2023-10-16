import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ContentValidation } from './content.validation';
import { ContentController } from './content.controller';


const router = express.Router();


router.post("/create",
    validateRequest(ContentValidation.createContentZodSchema),
    ContentController.create);


export const ContentRoute = router;
