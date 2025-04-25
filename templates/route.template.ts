import express from 'express';
import { {{ModelName}}Controller } from '../controllers/{{ModelName}}Controller';

const router = express.Router();

router.get('/', {{ModelName}}Controller.getAll);
router.post('/', {{ModelName}}Controller.create);

export default router;
