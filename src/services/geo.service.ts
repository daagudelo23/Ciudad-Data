import * as geonames from '../clients/geonames.client';
import * as worldbank from '../clients/worldbank.client';
import { GeoReportModel } from '../models/Report';

export async function getCityData(city: string) {
  return geonames.searchCity(city);
}

export async function getPopulationByCountry(countryCode: string) {
  return worldbank.getPopulation(countryCode);
}

export async function createGeoReport(data: { title: string; description?: string; location?: string }) {
  const created = await GeoReportModel.create({ ...data });
  return created;
}
