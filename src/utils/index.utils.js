import { CONFIDENTIAL_FIELDS } from './constants.utils.js';
import normalize from './normalize.utils.js';

const utils = {
  normalize: (data, fields) => normalize(data, fields),
  CONFIDENTIAL_FIELDS,
};

export default utils;
