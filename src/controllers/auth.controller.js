import services from '../services/index.service.js';

const activate = async (req, res) => {
  await services.auth.activate(req.params);
  res.send({ info: 'Account activated with success' });
};

const authController = {
  activate,
};

export default authController;
