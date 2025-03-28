import isUniqueFieldMiddleware from './isUniqueField.middleware.js';
import validationFieldMiddleware from './validationField.middleware.js';

const middlewares = {
  validationField: (model) => validationFieldMiddleware(model),
  isUniqueField: (schema) => isUniqueFieldMiddleware(schema),
};

export default middlewares;
