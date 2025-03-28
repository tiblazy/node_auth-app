'use strict';

import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import asyncError from './configs/asyncError.config.js';
import cors from './configs/cors.config.js';

const app = express;

app.use(express.json());
app.use(cors);
app.use(asyncError);

app.liste(process.env.EXPRESS_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server running');
});
