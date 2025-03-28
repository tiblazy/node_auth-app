import errors from '../errors/index.error.js';
import models from '../models/index.model.js';
import services from '../services/index.service.js';

const userMiddleware = async (req, _, next) => {
  const query = req.body.email ? { email: req.body.email } : req.params;
  const user = await services.user.find(query);
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

const roleMiddleware = (req, _, next) => {
  if (req.user.id !== req.params.id) {
    return next(
      errors.forbidden('You do not have permission to access this resource'),
    );
  }

  next();
};

const accessMiddleware = {
  user: userMiddleware,
  token: (key, propery) => tokenMiddleware(key, propery),
  role: roleMiddleware,
};

export default accessMiddleware;
