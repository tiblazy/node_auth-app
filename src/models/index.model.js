import configs from '../configs/index.config.js';
import Token from './Token.model.js';
import User from './User.model.js';

User.hasMany(Token, { foreignKey: 'userId' });
Token.belongsTo(User, { foreignKey: 'userId' });

configs.sequelize.model.User = User;
configs.sequelize.model.Token = Token;

const models = {
  user: User,
  token: Token,
};

export default models;
