import { Router } from 'express';
import * as transitController from '../controllers/transit.controller';
import { validate } from '../middlewares/validate.middleware';
import { getRoutesSchema, getEtaSchema, createTransitIncidentSchema } from '../validators/transit.validators';

const router = Router();

router.get('/routes/:city', validate(getRoutesSchema), transitController.getRoutes);
router.get('/eta', validate(getEtaSchema), transitController.getEta);
router.post('/incident', validate(createTransitIncidentSchema), transitController.createIncident);

export default router;
