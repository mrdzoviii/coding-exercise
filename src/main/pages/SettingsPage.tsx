import { PageLayout } from '../../layout';
import { Flex, HeadingTertiary, PrimaryButton } from '../../styled';

import { useLogout } from '../../auth/hooks';
import { CityWeather } from '../components';

export const SettingsPage = () => {
  const { logout } = useLogout();
  return (
    <PageLayout title="Settings">
      <Flex flexDirection="column" alignItems="flex-start" flex="1" padding="medium" width="100%">
        <HeadingTertiary>Welcome to settings page</HeadingTertiary>
        <CityWeather city="Madrid" />
        <PrimaryButton onClick={logout}>Log out</PrimaryButton>
      </Flex>
    </PageLayout>
  );
};
