import styled, { DefaultTheme } from 'styled-components';

export interface BoxProps {
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  width?: string;
  height?: string;
}

export const Box = styled.div<BoxProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => (props.padding ? props.theme.spacing[props.padding] : null)};
  background-color: ${(props) => (props.backgroundColor ? props.theme.colors[props.backgroundColor] : null)};
`;
