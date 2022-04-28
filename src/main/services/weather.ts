import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IWeatherData, IWeatherResponse, openWeatherApi } from '../../config';

export interface IGetCityWeatherHook {
  data: IWeatherData | null;
  isLoading: boolean;
  error: AxiosError | null;
}

export const useGetCityWeather = (city: string): IGetCityWeatherHook => {
  const [data, setData] = useState<IWeatherData | null>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await openWeatherApi.get<IWeatherResponse>(`/weather?q=${city}&units=metric`);
        setData(response.status === 200 ? { city: response.data.name, temperature: response.data.main.temp } : null);
      } catch (err) {
        const axiosErr = err as AxiosError;
        setError(axiosErr);
      } finally {
        setLoading(false);
      }
    })();
  }, [city]);

  return {
    data: data || null,
    isLoading,
    error
  };
};
