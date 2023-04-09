import { Express } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const businessController = (app: Express) => {
  app.get('/business', async (_req, res) => {
    const businesses = await prisma.business.findMany();
    res.json(businesses);
  });

  app.get('/business/:businessId', async (req, res) => {
    const id = Number(req.params.businessId);
    const businesses = await prisma.business.findUnique({ where: { id } });
    res.json(businesses);
  });

  app.post('/business', async (req, res) => {
    const { name } = req.body;
    const businesses = await prisma.business.create({ data: { name } });
    res.json(businesses);
  });
};
