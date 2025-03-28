import { v4 as uuidv4 } from 'uuid';
import services from '../services/index.service.js';

const create = async (req, res) => {
  const user = await services.user.create(req.body);
  const mail = await services.mail.sendActivationEmail({
    to: user.email,
    token: uuidv4(),
  });

  res.status(201).send({ user, mail });
};

const userController = {
  create,
};

export default userController;
