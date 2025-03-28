import Router from 'express';
import controllers from '../controllers/index.controller.js';
import middlewares from '../middleware/index.middleware.js';

const authRouter = Router();

authRouter.get(
  '/:token',
  middlewares.accessStatus.token('activate', 'params'),
  controllers.auth.activate,
);

export default authRouter;
