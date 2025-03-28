import services from '../services/index.service.js';

const activate = async (req, res) => {
  await services.token.activate(req.params);
  res.send({ info: 'Account activated with success' });
};

const tokenController = {
  activate,
};

export default tokenController;
