import { v4 as uuidv4 } from 'uuid';
import services from '../services/index.service.js';

const create = async (req, res) => {
  const user = await services.user.create(req.body);

  if (!user) {
    throw new Error('Erro na criação do usuário');
  }

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

const list = async (req, res) => {
  const users = await services.user.list();

  res.send(users);
};

const update = async (req, res) => {
  const user = await services.user.update(req.user.id, req.body);

  res.send(user);
};

const updatePassword = async (req, res) => {
  const user = await services.user.updatePassword(req.user.id, req.body);

  res.send(user);
};

const remove = async (req, res) => {
  await services.user.remove(req.user.id);

  res.status(204).send();
};

const userController = {
  create,
  find,
  list,
  update,
  updatePassword,
  remove,
};

export default userController;
