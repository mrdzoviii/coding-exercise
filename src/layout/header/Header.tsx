import { FC } from 'react';
import { Flex, Box } from '../../styled';
import { useRootStateSelector } from '../../store';

export interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = ({ title }) => {
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
      padding="medium"
    >
      <Box>{title}</Box>
      <Box>
        <Box>{user?.email}</Box>
        <Box>{user?.provider}</Box>
      </Box>
    </Flex>
  );
};
