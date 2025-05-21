import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


import { {{ModelName}} } from '../models/{{ModelName}}';

export const {{ModelName}}Controller = {
  // Get all
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await {{ModelName}}.find();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get by ID
  getById: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const item = await {{ModelName}}.findById(id);
      if (!item) {
        res.status(404).json({ message: '{{ModelName}} not found' });
        return;
      }
      res.status(200).json(item);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const newItem = await {{ModelName}}.create(req.body);
      res.status(201).json(newItem);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update by ID
  updateById: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const updatedItem = await {{ModelName}}.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
      if (!updatedItem) {
        res.status(404).json({ message: '{{ModelName}} not found' });
        return;
      }
      res.status(200).json(updatedItem);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete by ID
  deleteById: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deletedItem = await {{ModelName}}.findByIdAndDelete(id);
      if (!deletedItem) {
        res.status(404).json({ message: '{{ModelName}} not found' });
        return;
      }
      res.status(200).json({ message: '{{ModelName}} deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Optional: Search (basic text search on `name` field, modify as needed)
  search: async (req: Request, res: Response): Promise<void> => {
    try {
      const { q } = req.query;
      const results = await {{ModelName}}.find({
        name: { $regex: q as string, $options: 'i' },
      });
      res.status(200).json(results);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // Optional: Paginate (simple page & limit)
  paginate: async (req: Request, res: Response): Promise<void> => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const [data, count] = await Promise.all([
        {{ModelName}}.find().skip(skip).limit(limit),
        {{ModelName}}.countDocuments(),
      ]);

      res.status(200).json({
        data,
        page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
// Register user
register: async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const existing = await {{ModelName}}.findOne({ email });
    if (existing) {
      res.status(400).json({ message: 'Email already in use' });
      return;
    }
    const user = await {{ModelName}}.create({ name, email, password });
    res.status(201).json({ message: 'User registered', user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
},

// Login user
login: async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await {{ModelName}}.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
},
