'use strict';

import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import config from './configs/index.config.js';
import userRouter from './routers/user.router.js';
import './sync.js';

const app = express();

app.use(express.json());
app.use(config.cors);
app.use('/users', userRouter);
app.use(config.asyncError);

app.listen(process.env.EXPRESS_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server running');
});
