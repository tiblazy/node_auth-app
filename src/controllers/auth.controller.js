import services from '../services/index.service.js';

const login = async (req, res) => {
  const token = await services.auth.login(req.body);

  res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 });
  res.send({ token });
};

const authController = {
  login,
};

export default authController;
