import { Router } from 'express';

import postRoutes from './components/posts/routes';
import { errorHandler } from './handlers';

const router = Router();

router.use('/posts', postRoutes);

router.use(errorHandler);

export default router;
