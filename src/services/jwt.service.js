import 'dotenv/config';
import jwt from 'jsonwebtoken';
import errors from '../errors/index.error.js';

const sign = (payload, expiresIn = '3m') => {
  if (!process.env.JWT_TOKEN) {
    throw errors.environment(
      `JWT_TOKEN is not defined in environment variables`,
    );
  }

  return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn });
};

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_TOKEN);
  } catch (err) {
    throw errors.unauthorized(`${err}`);
  }
};

const jwtService = {
  sign,
  verify,
};

export default jwtService;
