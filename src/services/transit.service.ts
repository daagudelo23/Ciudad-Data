import * as transitClient from '../clients/transit.client';
import { TransitIncidentModel } from '../models/TransitIncident';

export async function getRoutes(city: string) {
  return transitClient.getRoutes(city);
}

export async function getEta(stopId: string) {
  return transitClient.getEta(stopId);
}

export async function createIncident(data: { type: string; description?: string; route?: string }) {
  const created = await TransitIncidentModel.create({ ...data });
  return created;
}
