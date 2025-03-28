import errors from '../errors/index.error.js';
import models from '../models/index.model.js';
import services from '../services/index.service.js';

const userMiddleware = async (req, _, next) => {
  const user = await services.user.find(req.params);

  const token = await models.token.findOne({ where: { userId: user.id } });

  if (token.activate) {
    return next(
      errors.badRequest(
        'You must activate your account first, please check your email',
      ),
    );
  }

  next();
};

const tokenMiddleware = (key, property) => async (req, _, next) => {
  const [, value] = Object.entries(req[property])[0];

  const token = await models.token.findOne({
    where: { [key]: value },
  });

  if (property === 'params' && (token === null || token === undefined)) {
    return next(errors.notFound('Token not found or already activated'));
  }

  next();
};

const accessStatusMiddleware = {
  user: userMiddleware,
  token: (key, propery) => tokenMiddleware(key, propery),
};

export default accessStatusMiddleware;
