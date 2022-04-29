import { FC } from 'react';
import { useGetCityWeather } from '../../services';
import { Flex } from '../../../styled';
import { ICityWeather } from '../../types';

export const CityWeather: FC<ICityWeather> = ({ city }) => {
  const { data, isLoading, error } = useGetCityWeather(city);
  if (isLoading) return <Flex>...loading</Flex>;
  if (error) return <Flex>Ops something went wrong</Flex>;
  if (!data) return <Flex>No data for {city}</Flex>;

  return (
    <Flex
      padding="medium"
      height="7rem"
      backgroundColor="primaryLight"
      alignItems="center"
      justifyContent="space-between"
      width="20rem"
    >
      <h2>{data.city}</h2> <h3>{Math.round(data.temperature)} &#x2103; </h3>
    </Flex>
  );
};
