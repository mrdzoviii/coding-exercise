import { FC } from 'react';
import { Outlet } from 'react-router';
import { Flex } from '../../styled';
import { Header } from '../header/Header';

export interface ILayoutProps {
  title: string;
}

export const Layout: FC<ILayoutProps> = ({ title }) => {
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
        <Flex width="25rem" flexDirection="column" height="100%">
          Navigation
        </Flex>
        <Flex flex="1" flexDirection="column" height="100%" backgroundColor="primary">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};
