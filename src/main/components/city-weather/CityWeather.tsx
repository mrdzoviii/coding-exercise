import { FC } from 'react';
import { useGetCityWeather } from '../../services';

export interface ICityWeather {
  city: string;
}

export const CityWeather: FC<ICityWeather> = ({ city }) => {
  const { data, isLoading, error } = useGetCityWeather(city);
  if (isLoading) return <div>...loading</div>;
  if (error) return <div>Ops something went wrong</div>;
  return (
    <div>
      {data?.city} {data?.temperature}
    </div>
  );
};
