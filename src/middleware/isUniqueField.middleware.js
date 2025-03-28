import error from '../errors/index.error.js';

const isUniqueFieldMiddleware = (model) => async (req, _, next) => {
  const uniqueFields = Object.keys(model.rawAttributes).filter(
    (k) => model.rawAttributes[k].unique === true,
  );

  for (const f of uniqueFields) {
    const value = req.body[f];

    if (value) {
      const existingRecord = await model.findOne({
        where: {
          [f]: value,
        },
      });

      if (existingRecord) {
        const err = error.badRequest(`The ${f} value is already taken`);

        return next(err);
      }
    }
  }

  next();
};

export default isUniqueFieldMiddleware;
