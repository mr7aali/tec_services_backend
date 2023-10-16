import express from 'express';
import { ReviewController } from './review.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';




const router = express.Router();


router.post("/create",
    validateRequest(ReviewValidation.createReviewZodSchema),
    ReviewController.create);


export const ReviewRoute = router;