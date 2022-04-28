import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FC } from 'react';

const NavigationLink = styled(NavLink)`
  display: block;
  font-size: ${(props) => props.theme.fontSize.normal};
  color: ${(props) => props.theme.colors.textSecondary};
  padding: ${(props) => props.theme.spacing.normal};
  text-decoration: none;
  width: 100%;
  border-radius: 1rem;
  &.active {
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.text};
  }
`;

export const NavigationItem: FC<NavLinkProps> = ({ children, to, ...props }) => {
  return (
    <NavigationLink {...props} to={to}>
      {children}
    </NavigationLink>
  );
};
