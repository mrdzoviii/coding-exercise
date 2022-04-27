import styled, { DefaultTheme } from 'styled-components';
import { Flex } from '../layout';

export interface CardProps {
  gap?: keyof DefaultTheme['spacing'];
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  height?: string;
  minWidth?: string;
  boxShadow?: keyof DefaultTheme['shadow'];
}

export const Card = styled(Flex)<CardProps>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (!props.minWidth ? '50rem' : props.minWidth)};
  height: ${(props) => (!props.height ? '50rem' : props.minWidth)};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => (props.boxShadow ? props.theme.shadow[props.boxShadow] : null)};
`;
