import express from 'express';

import routes from './routes/index';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
