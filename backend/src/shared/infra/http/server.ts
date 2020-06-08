import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/container';
import '@shared/infra/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});