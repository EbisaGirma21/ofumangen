import express from 'express';
import { {{ModelName}}Controller } from '../controllers/{{ModelName}}Controller';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Public
router.post('/register', {{ModelName}}Controller.register);
router.post('/login', {{ModelName}}Controller.login);

// Protected CRUD
router.get('/', authMiddleware, {{ModelName}}Controller.getAll);
router.get('/:id', authMiddleware, {{ModelName}}Controller.getById);
router.post('/', authMiddleware, {{ModelName}}Controller.create);
router.put('/:id', authMiddleware, {{ModelName}}Controller.updateById);
router.delete('/:id', authMiddleware, {{ModelName}}Controller.deleteById);
router.get('/search/query', authMiddleware, {{ModelName}}Controller.search);
router.get('/paginate/list', authMiddleware, {{ModelName}}Controller.paginate);

export default router;
