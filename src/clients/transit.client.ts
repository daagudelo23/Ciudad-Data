import axios from 'axios';
import config from '../config/env';

const client = axios.create({
  baseURL: config.transitBaseUrl
});

export async function getRoutes(city: string) {
  if (!config.transitBaseUrl) throw new Error('Configura TRANSIT_API_BASE_URL');
  const { data } = await client.get(`/routes/${encodeURIComponent(city)}`, {
    params: { key: config.transitApiKey }
  });
  return data;
}

export async function getEta(stopId: string) {
  if (!config.transitBaseUrl) throw new Error('Configura TRANSIT_API_BASE_URL');
  const { data } = await client.get(`/eta`, {
    params: { stop_id: stopId, key: config.transitApiKey }
  });
  return data;
}
