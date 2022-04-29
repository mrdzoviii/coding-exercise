import { DefaultTheme } from 'styled-components';

export interface IFlexProps {
  alignItems?:
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flex?: string;
  gap?: keyof DefaultTheme['spacing'];
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  width?: string;
  height?: string;
  boxShadow?: keyof DefaultTheme['shadow'];
  marginRight?: keyof DefaultTheme['spacing'];
  borderRadiusTop?: string;
}

export interface IBoxProps {
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  width?: string;
  height?: string;
}
