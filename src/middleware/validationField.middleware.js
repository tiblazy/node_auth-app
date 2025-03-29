const validationFieldMiddleware = (schema) => async (req, res, next) => {
  await schema.parse(req.body);
  next();
};

export default validationFieldMiddleware;
