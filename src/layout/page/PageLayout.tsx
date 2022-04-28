import { FC, ReactNode } from 'react';
import { Flex, HeadingSecondary } from '../../styled';

export interface IPageLayoutProps {
  title: string;
  children: ReactNode;
}

export const PageLayout: FC<IPageLayoutProps> = ({ title, children }) => {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" width="100%" flex="1">
      <Flex height="10rem" justifyContent="flex-start" alignItems="center" backgroundColor="primary" width="100%">
        <HeadingSecondary>{title}</HeadingSecondary>
      </Flex>
      <Flex flex="1" width="100%">
        {children}
      </Flex>
    </Flex>
  );
};
