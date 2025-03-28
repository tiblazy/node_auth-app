import Router from 'express';
import controllers from '../controllers/index.controller.js';
import middlewares from '../middleware/index.middleware.js';
import models from '../models/index.model.js';
import userSchema from '../validations/user.validation.js';

const userRouter = Router();

userRouter
  .post(
    '/',
    middlewares.validationField(userSchema.create),
    middlewares.isUniqueField(models.user),
    controllers.user.create,
  )
  .get(
    '/:id',
    middlewares.auth,
    middlewares.access.user,
    middlewares.access.role,
    controllers.user.find,
  );

export default userRouter;
