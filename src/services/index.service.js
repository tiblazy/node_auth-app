import authService from './auth.service.js';
import mailService from './mail.service.js';
import userService from './user.service.js';

const services = {
  user: userService,
  mail: mailService,
  auth: authService,
};

export default services;
