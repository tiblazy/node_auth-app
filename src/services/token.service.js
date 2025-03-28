import errors from '../errors/index.error.js';
import models from '../models/index.model.js';

const create = async (data) => {
  await models.token.create({
    userId: data.userId,
    activate: data.activate,
  });
};

const activate = async (data) => {
  const token = await models.token.findOne({ where: { activate: data.token } });

  if (!token) {
    throw errors.notFound('Token not found');
  }

  await models.token.update(
    { activate: null },
    { where: { activate: data.token } },
  );
};

const tokenService = {
  create,
  activate,
};

export default tokenService;
