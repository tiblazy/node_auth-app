import Router from 'express';
import controllers from '../controllers/index.controller.js';
import middlewares from '../middleware/index.middleware.js';

const authRouter = Router();

authRouter.post('/login', middlewares.access.user, controllers.auth.login);

export default authRouter;
