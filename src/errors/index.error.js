import { badRequest } from './request.error.js';
import zod from './zod.error.js';

const errors = {
  badRequest: (message) => badRequest(400, message),
  zod: (err, res) => zod(err, res),
};

export default errors;
