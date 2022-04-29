import { FC } from 'react';
import styled from 'styled-components';
import { Flex, Box } from '../../../styled';
import { useRootStateSelector } from '../../../store';
import { IAppHeaderProps } from '../../types';

const Title = styled(Box)`
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const UserEmail = styled(Title)`
  font-size: ${(props) => props.theme.fontSize.small};
`;

const UserProvider = styled(Box)`
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const AppHeader: FC<IAppHeaderProps> = ({ title }) => {
  const user = useRootStateSelector((state) => state.auth.user);
  return (
    <Flex
      backgroundColor="secondary"
      as="header"
      flexDirection="row"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      height="7rem"
      padding="large"
    >
      <Title>{title}</Title>
      <Flex flexDirection="column" alignItems="flex-end">
        <UserEmail>{user?.email}</UserEmail>
        <UserProvider>{user?.provider}</UserProvider>
      </Flex>
    </Flex>
  );
};
