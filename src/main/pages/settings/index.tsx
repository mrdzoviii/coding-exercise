import { PageLayout } from '../../../layout';
import { Flex, HeadingTertiary, Button } from '../../../styled';

import { useLogout } from '../../../auth/hooks';
import { CityWeather } from '../../components';

export const SettingsPage = () => {
  const { logout } = useLogout();
  return (
    <PageLayout title="Settings">
      <Flex alignItems="center" gap="extraLarge" flex="1" padding="medium" width="100%">
        <HeadingTertiary>Welcome to settings page</HeadingTertiary>
        <CityWeather city="Madrid" />
        <Button variant="contained" onClick={logout}>
          Log out
        </Button>
      </Flex>
    </PageLayout>
  );
};
