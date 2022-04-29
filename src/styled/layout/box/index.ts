import styled from 'styled-components';
import { IBoxProps } from '../../types';

export const Box = styled.div<IBoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => (props.padding ? props.theme.spacing[props.padding] : null)};
  background-color: ${(props) => (props.backgroundColor ? props.theme.colors[props.backgroundColor] : null)};
`;
