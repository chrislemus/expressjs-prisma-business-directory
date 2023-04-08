import express, { RequestHandler } from 'express';

const app = express();
const PORT = 3000;

const logger: RequestHandler = (req, _res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  console.info(`(${method}) ${url}`);
  next();
};

app.use(logger);

app.get('/', (_req, res) => {
  const data = { Hello: 'World' };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
