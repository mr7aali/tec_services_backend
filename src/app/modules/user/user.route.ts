
import express from 'express'; import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
;

const router = express.Router();



router.post("/signup",
    validateRequest(UserValidation.createUserZodSchema),
    UserController.createUser);

router.post("/signup-admin",
    validateRequest(UserValidation.createAdminZodSchema),
    UserController.createAdmin);


router.get("/:id",
    UserController.getSingle);

router.patch("/update/:id",
    validateRequest(UserValidation.UpdateUserZodSchema),
    UserController.update);

export const UserRoutes = router;