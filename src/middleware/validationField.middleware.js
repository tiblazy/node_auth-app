const validationFieldMiddleware = (schema) => async (req, _, next) => {
  schema.parse(req.body);

  next();
};

export default validationFieldMiddleware;
