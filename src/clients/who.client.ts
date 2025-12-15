import axios from 'axios';
import config from '../config/env';

export async function getIndicator(indicator: string) {
  const base = config.whoBaseUrl;
  const url = `${base}/api/Indicator?$filter=contains(IndicatorCode,'${encodeURIComponent(indicator)}')`;
  const { data } = await axios.get(url);
  return data;
}
