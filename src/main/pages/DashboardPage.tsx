import { PageLayout } from '../../layout';
import { Flex, HeadingTertiary } from '../../styled';

export const DashboardPage = () => (
  <PageLayout title="Secret dashboard">
    <Flex flexDirection="column" alignItems="flex-start" flex="1" padding="extraLarge" width="100%">
      <HeadingTertiary>Welcome to settings page</HeadingTertiary>
    </Flex>
  </PageLayout>
);
