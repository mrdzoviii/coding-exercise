import { DefaultTheme } from 'styled-components';

export interface ICardProps {
  gap?: keyof DefaultTheme['spacing'];
  backgroundColor?: keyof DefaultTheme['colors'];
  padding?: keyof DefaultTheme['spacing'];
  height?: string;
  minWidth?: string;
  boxShadow?: keyof DefaultTheme['shadow'];
}
