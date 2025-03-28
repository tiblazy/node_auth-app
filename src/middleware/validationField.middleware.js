const validationFieldMiddleware = (schema) => async (req, _, next) => {
  await schema.parse(req.body);

  next();
};

export default validationFieldMiddleware;
