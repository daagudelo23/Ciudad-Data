import axios from 'axios';
import config from '../config/env';

export async function searchCity(city: string) {
  const username = config.geoNamesUser;
  if (!username) throw new Error('Falta GEO_NAMES_USERNAME');
  const url = `http://api.geonames.org/searchJSON?name=${encodeURIComponent(city)}&maxRows=1&username=${username}`;
  const { data } = await axios.get(url);
  return data;
}
