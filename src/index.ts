import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import express, { RequestHandler } from 'express';

const prisma = new PrismaClient();

const app = express();
const PORT = 3000;

const logger: RequestHandler = (req, _res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  console.info(`(${method}) ${url}`);
  next();
};

app.use(logger);
app.use(bodyParser.json());

app.get('/business', async (_req, res) => {
  const businesses = await prisma.business.findMany();
  res.json(businesses);
});

app.post('/business', async (req, res) => {
  const { name } = req.body;
  const businesses = await prisma.business.create({ data: { name } });
  res.json(businesses);
});

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
