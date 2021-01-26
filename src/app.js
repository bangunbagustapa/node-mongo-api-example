import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';

import './config/database';

import users from './routes/users';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/users', users);

/*
This error handling will catches and processes errors that occur
both synchronously and asynchronously. Learn more here
https://expressjs.com/en/guide/error-handling.html
*/
app.use((err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // mongoose bad objectid
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = createError(404, message);
  }

  // mongoose duplicate key
  if (err.code === 'MongooseError') {
    const message = 'Duplicate field value entered';
    error = createError(400, message);
  }

  // mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = createError(400, message);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = createError(400, message);
  }

  return res.status(error.statusCode || 500).json({ error: { message: error.message } });
});

export default app;
