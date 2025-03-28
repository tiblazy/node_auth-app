import { badRequest, notFound } from './request.error.js';
import zod from './zod.error.js';

const errors = {
  badRequest: (message) => badRequest(message),
  notFound: (message) => notFound(message),
  zod: (err, res) => zod(err, res),
};

export default errors;
