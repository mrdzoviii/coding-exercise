import { FC } from 'react';
import styled from 'styled-components';
import { useGetCityWeather } from '../../services';
import { Flex } from '../../../styled';

export interface ICityWeather {
  city: string;
}

const WeatherCard = styled(Flex)``;

export const CityWeather: FC<ICityWeather> = ({ city }) => {
  const { data, isLoading, error } = useGetCityWeather(city);
  if (isLoading) return <WeatherCard>...loading</WeatherCard>;
  if (error) return <WeatherCard>Ops something went wrong</WeatherCard>;
  if (!data) return <WeatherCard>No data for {city}</WeatherCard>;

  return (
    <WeatherCard
      padding="medium"
      height="7rem"
      backgroundColor="primaryLight"
      alignItems="center"
      justifyContent="space-between"
      width="20rem"
    >
      <h2>{data.city}</h2> <h3>{Math.round(data.temperature)} &#x2103; </h3>
    </WeatherCard>
  );
};
