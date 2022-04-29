import { FC } from 'react';
import { Outlet } from 'react-router';
import { Flex } from '../../../styled';
import { IAppLayoutProps } from '../../types';
import { AppHeader } from '../app-header';
import { AppNavigation } from '../app-navigation';

export const AppLayout: FC<IAppLayoutProps> = ({ title }) => {
  return (
    <Flex
      backgroundColor="secondary"
      flex="1"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
    >
      <AppHeader title={title} />
      <Flex flex="1" width="100%">
        <AppNavigation />
        <Flex flex="1" flexDirection="column" height="100%" boxShadow="card" marginRight="large" borderRadiusTop="2rem">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};
