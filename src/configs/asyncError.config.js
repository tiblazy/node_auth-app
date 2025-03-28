import { ZodError } from 'zod';
import error from '../errors/index.error.js';

const asyncError = (err, _, res, __) => {
  if (err instanceof ZodError) {
    error.zod(err, res);
  }

  if (err instanceof Error) {
    return res.status(err.status).send({
      issue: err.message,
    });
  }

  res.status(500).send({
    issue: 'Internal server error',
  });
};

export default asyncError;
