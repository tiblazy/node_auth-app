import { v4 as uuidv4 } from 'uuid';
import services from '../services/index.service.js';

const create = async (req, res) => {
  const user = await services.user.create(req.body);
  const mail = await services.mail.sendActivationEmail({
    to: user.email,
    token: uuidv4(),
  });

  await services.auth.create({
    userId: user.id,
    activate: mail.token,
  });

  res.status(201).send(user);
};

const find = async (req, res) => {
  const user = await services.user.find(req.params);

  res.send(user);
};

const userController = {
  create,
  find,
};

export default userController;
