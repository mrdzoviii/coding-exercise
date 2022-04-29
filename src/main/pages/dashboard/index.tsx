import { PageLayout } from '../../../layout';
import { Flex, HeadingTertiary } from '../../../styled';
import { CityWeather } from '../../components';

export const DashboardPage = () => {
  return (
    <PageLayout title="Secret dashboard">
      <Flex alignItems="center" justifyContent="space-between" flex="1" padding="extraLarge" width="100%">
        <HeadingTertiary>Dashboard secret</HeadingTertiary>
        <CityWeather city="Belgrade" />
      </Flex>
    </PageLayout>
  );
};
