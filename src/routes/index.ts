import { Router } from 'express';
import geoRouter from './geo.routes';
import transitRouter from './transit.routes';

const router = Router();

router.use('/geo', geoRouter);
router.use('/transit', transitRouter);

export default router;
