import { Request, Response, NextFunction } from 'express';
import * as transitService from '../services/transit.service';

export async function getRoutes(req: Request, res: Response, next: NextFunction) {
  try {
    const { city } = req.params as { city: string };
    const data = await transitService.getRoutes(city);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getEta(req: Request, res: Response, next: NextFunction) {
  try {
    const { stop_id } = req.query as { stop_id: string };
    const data = await transitService.getEta(stop_id);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function createIncident(req: Request, res: Response, next: NextFunction) {
  try {
    const incident = await transitService.createIncident(req.body);
    res.status(201).json(incident);
  } catch (err) {
    next(err);
  }
}
