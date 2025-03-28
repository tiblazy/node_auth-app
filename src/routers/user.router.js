import Router from 'express';
import controllers from '../controllers/index.controller.js';
import middlewares from '../middleware/index.middleware.js';
import User from '../models/User.model.js';
import userSchema from '../validations/user.validation.js';

const userRouter = Router();

userRouter.post(
  '/',
  middlewares.validationField(userSchema.create),
  middlewares.isUniqueField(User),
  controllers.user.create,
);

export default userRouter;
