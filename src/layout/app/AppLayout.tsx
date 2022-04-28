import { FC } from 'react';
import { Outlet } from 'react-router';
import { Flex } from '../../styled';
import { Header } from './header/Header';
import { Navigation } from './navigation/Navigation.';

export interface IAppLayoutProps {
  title: string;
}

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
      <Header title={title} />
      <Flex flex="1" width="100%">
        <Navigation />
        <Flex flex="1" flexDirection="column" height="100%" boxShadow="card" marginRight="large" borderRadiusTop="2rem">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};
