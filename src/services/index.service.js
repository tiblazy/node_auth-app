import authService from './auth.service.js';
import encryptService from './encrypt.service.js';
import jwtService from './jwt.service.js';
import mailService from './mail.service.js';
import tokenService from './token.service.js';
import userService from './user.service.js';

const services = {
  user: userService,
  mail: mailService,
  auth: authService,
  jwt: jwtService,
  encrypt: encryptService,
  token: tokenService,
};

export default services;
