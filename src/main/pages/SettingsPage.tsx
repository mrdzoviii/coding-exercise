import { PageLayout } from '../../layout';
import { Flex, HeadingTertiary, PrimaryButton } from '../../styled';

import { useLogout } from '../../auth/hooks';

export const SettingsPage = () => {
  const { logout } = useLogout();
  return (
    <PageLayout title="Settings">
      <Flex flexDirection="column" alignItems="flex-start" flex="1" padding="medium" width="100%">
        <HeadingTertiary>Welcome to settings page</HeadingTertiary>
        <PrimaryButton onClick={logout}>Log out</PrimaryButton>
      </Flex>
    </PageLayout>
  );
};
