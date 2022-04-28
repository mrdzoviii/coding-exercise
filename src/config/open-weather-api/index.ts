import axios from 'axios';

export interface IWeatherData {
  city: string;
  temperature: number;
}

export interface IWeatherResponse {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const openWeatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

openWeatherApi.interceptors.request.use(
  (requestConfig) => {
    return { ...requestConfig, params: { appid: API_KEY } };
  },
  (error) => Promise.reject(error)
);
