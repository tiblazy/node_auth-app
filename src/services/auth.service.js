import errors from '../errors/index.error.js';
import models from '../models/index.model.js';
import encryptService from './encrypt.service.js';
import jwtService from './jwt.service.js';

const login = async (data) => {
  const user = await models.user.findOne({ where: { email: data.email } });

  if (!user) {
    throw errors.badRequest('Invalid credentials');
  }

  const validPassword = encryptService.compare(data.password, user.password);

  if (!validPassword) {
    throw errors.badRequest('Invalid credentials');
  }

  const token = jwtService.sign({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  return token;
};

const authService = {
  login,
};

export default authService;
