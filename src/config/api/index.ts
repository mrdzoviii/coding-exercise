import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

api.interceptors.request.use(
  (requestConfig) => {
    return { ...requestConfig, params: { appid: API_KEY } };
  },
  (error) => Promise.reject(error)
);
