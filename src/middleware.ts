import { RequestHandler } from 'express';

export const logger: RequestHandler = (req, _res, next) => {
  const url = req.originalUrl;
  const method = req.method;
  console.info(`(${method}) ${url}`);
  next();
};
