import { PageLayout } from '../../layout';
import { Flex, HeadingTertiary } from '../../styled';
import { CityWeather } from '../components';

export const DashboardPage = () => {
  return (
    <PageLayout title="Secret dashboard">
      <Flex flexDirection="column" alignItems="flex-start" flex="1" padding="extraLarge" width="100%">
        <HeadingTertiary>Dashboard secret</HeadingTertiary>
        <CityWeather city="Belgrade" />
      </Flex>
    </PageLayout>
  );
};
