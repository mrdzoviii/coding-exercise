import { Flex, NavigationItem } from '../../../styled';
import { PathRoutes } from '../../../config';

export const AppNavigation = () => {
  return (
    <Flex
      backgroundColor="secondary"
      as="nav"
      flexDirection="column"
      gap="normal"
      height="100%"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="20rem"
      padding="large"
    >
      <NavigationItem to={PathRoutes.DASHBOARD}>Dashboard</NavigationItem>
      <NavigationItem to={PathRoutes.SETTINGS}>Settings</NavigationItem>
    </Flex>
  );
};
