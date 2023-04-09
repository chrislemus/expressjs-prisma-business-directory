import bodyParser from 'body-parser';
import express, { RequestHandler, Express } from 'express';
import { logger } from './middleware';
import { businessController } from './business';

const app = express();
const PORT = 3000;

const middleware: RequestHandler[] = [logger, bodyParser.json()];
const controllers: ((app: Express) => void)[] = [businessController];

middleware.forEach((mw) => app.use(mw));
controllers.forEach((c) => c(app));

app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
