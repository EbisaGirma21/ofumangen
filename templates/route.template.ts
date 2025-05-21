import express from 'express';
import { {{ModelName}}Controller } from '../controllers/{{ModelName}}Controller';

const router = express.Router();

// Create
router.post('/', {{ModelName}}Controller.create);

// Read all
router.get('/', {{ModelName}}Controller.getAll);

// Read one by ID
router.get('/:id', {{ModelName}}Controller.getById);

// Update by ID
router.put('/:id', {{ModelName}}Controller.updateById);

// Delete by ID
router.delete('/:id', {{ModelName}}Controller.deleteById);

// Search by name (query param `q`)
router.get('/search/query', {{ModelName}}Controller.search);

// Paginate (query params `page` and `limit`)
router.get('/paginate/list', {{ModelName}}Controller.paginate);

export default router;
