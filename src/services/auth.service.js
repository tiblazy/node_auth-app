import errors from '../errors/index.error.js';
import models from '../models/index.model.js';
import encryptService from './encrypt.service.js';

const login = async (data) => {
  const user = await models.user.findOne({ where: { email: data.email } });

  if (!user) {
    throw errors.badRequest('Invalid credentials');
  }

  const validPassword = encryptService.compare(data.password, user.password);

  if (!validPassword) {
    throw errors.badRequest('Invalid credentials');
  }

  return user;
};

const authService = {
  login,
};

export default authService;
