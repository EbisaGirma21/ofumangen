import { Request, Response } from 'express';
import { {{ModelName}} } from '../models/{{ModelName}}';

export const {{ModelName}}Controller = {
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await {{ModelName}}.find();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const newItem = await {{ModelName}}.create(req.body);
      res.status(201).json(newItem);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
};
