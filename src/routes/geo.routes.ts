import { Router } from 'express';
import * as geoController from '../controllers/geo.controller';
import { validate } from '../middlewares/validate.middleware';
import { getCitySchema, getPopulationSchema, createGeoReportSchema } from '../validators/geo.validators';

const router = Router();

router.get('/city/:city', validate(getCitySchema), geoController.getCityData);
router.get('/population/:country', validate(getPopulationSchema), geoController.getPopulationData);
router.post('/report', validate(createGeoReportSchema), geoController.createGeoReport);

export default router;
