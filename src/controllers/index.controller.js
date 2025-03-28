import authController from './auth.controller.js';
import tokenController from './token.controller.js';
import userController from './user.controller.js';

const controllers = {
  user: userController,
  auth: authController,
  token: tokenController,
};

export default controllers;
