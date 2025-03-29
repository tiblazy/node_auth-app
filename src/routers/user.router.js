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
  .get('/', controllers.user.list)
  .get(
    '/:id',
    middlewares.auth,
    middlewares.access.user,
    middlewares.access.role,
    controllers.user.find,
  )
  .patch(
    '/:id',
    middlewares.auth,
    // middlewares.access.user, ver como contornar logica
    middlewares.access.role,
    controllers.user.update,
  )
  .patch(
    '/:id/password',
    middlewares.auth,
    middlewares.validationField(userSchema.updatePassword),
    // middlewares.access.user,
    // middlewares.access.role,
    controllers.user.updatePassword,
  )
  .delete(
    '/:id',
    middlewares.auth,
    middlewares.access.user,
    middlewares.access.role,
    controllers.user.remove,
  );

export default userRouter;
