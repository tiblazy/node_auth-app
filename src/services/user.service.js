import { v4 as uuidv4 } from 'uuid';
import errors from '../errors/index.error.js';
import models from '../models/index.model.js';
import utils from '../utils/index.utils.js';
import encryptService from './encrypt.service.js';

const CONFIDENTIAL_FIELDS = ['password', 'createdAt', 'updatedAt'];
const normalizeData = (data) => utils.normalize(data, CONFIDENTIAL_FIELDS);

const create = async (data) => {
  const password = encryptService.sync(data.password);
  const user = await models.user.create({ id: uuidv4(), ...data, password });

  return normalizeData(user.dataValues);
};

const find = async (data) => {
  const [key, value] = Object.entries(data)[0];
  const user = await models.user.findOne({ where: { [key]: value } });

  if (user === null) {
    throw errors.notFound('User not found');
  }

  return normalizeData(user.dataValues);
};

const userService = {
  create,
  find,
};

export default userService;
