import errors from '../errors/index.error.js';
import services from '../services/index.service.js';

const authMiddleware = (req, _, next) => {
  const token =
    req.cookies.refreshToken || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next(errors.unauthorized('Authentication token is required'));
  }

  req.user = services.jwt.refreshVerify(token);

  next();
};

export default authMiddleware;
