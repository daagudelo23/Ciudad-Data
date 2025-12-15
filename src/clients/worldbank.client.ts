import axios from 'axios';
import config from '../config/env';

export async function getPopulation(countryCode: string) {
  const base = config.worldBankBaseUrl;
  const url = `${base}/country/${encodeURIComponent(countryCode)}/indicator/SP.POP.TOTL?format=json`;
  const { data } = await axios.get(url);
  return data;
}
