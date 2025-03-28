import { hashSync } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.model.js';
import utils from '../utils/index.utils.js';

const CONFIDENTIAL_FIELDS = ['password', 'createdAt', 'updatedAt'];
const normalizeData = (data) => utils.normalize(data, CONFIDENTIAL_FIELDS);

const create = async (data) => {
  const password = hashSync(data.password, 8);
  const user = await User.create({ id: uuidv4(), ...data, password });

  return normalizeData(user.dataValues);
};

const userService = {
  create,
};

export default userService;
