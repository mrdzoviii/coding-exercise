import styled from 'styled-components';
import { Card as BaseCard } from 'rebass/styled-components';

export const Card = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (!props.minWidth ? '50rem' : props.minWidth)};
  height: ${(props) => (!props.height ? '50rem' : props.minWidth)};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};
`;
