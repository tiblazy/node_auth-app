import Router from 'express';
import controllers from '../controllers/index.controller.js';
import middlewares from '../middleware/index.middleware.js';

const tokenRouter = Router();

tokenRouter.get(
  '/activate/:token',
  middlewares.access.token('activate', 'params'),
  controllers.token.activate,
);

export default tokenRouter;
