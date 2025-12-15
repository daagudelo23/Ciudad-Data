import { Request, Response, NextFunction } from 'express';
import * as geoService from '../services/geo.service';

export async function getCityData(req: Request, res: Response, next: NextFunction) {
  try {
    const { city } = req.params as { city: string };
    const data = await geoService.getCityData(city);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getPopulationData(req: Request, res: Response, next: NextFunction) {
  try {
    const { country } = req.params as { country: string };
    const data = await geoService.getPopulationByCountry(country);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function createGeoReport(req: Request, res: Response, next: NextFunction) {
  try {
    const report = await geoService.createGeoReport(req.body);
    res.status(201).json(report);
  } catch (err) {
    next(err);
  }
}
