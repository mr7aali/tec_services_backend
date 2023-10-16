import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackController } from './review.controller';
import { FeedbackValidation } from './review.validation';




const router = express.Router();


router.post("/create",
    validateRequest(FeedbackValidation.createFeedbackZodSchema),
    FeedbackController.create);


export const FeedbackRoute = router;