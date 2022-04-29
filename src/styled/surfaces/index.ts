import styled from 'styled-components';
import { Flex } from '../layout';
import { ICardProps } from '../types';

export const Card = styled(Flex)<ICardProps>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (!props.minWidth ? '50rem' : props.minWidth)};
  height: ${(props) => (!props.height ? '50rem' : props.minWidth)};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => (props.boxShadow ? props.theme.shadow[props.boxShadow] : null)};
`;
