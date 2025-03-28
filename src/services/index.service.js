import mailService from './mail.service.js';
import userService from './user.service.js';

const services = {
  user: userService,
  mail: mailService,
};

export default services;
