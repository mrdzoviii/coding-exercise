import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  fonts: {
    roboto: "'Roboto', sans-serif"
  },
  fontSize: {
    normal: '1.4rem',
    small: '1.2rem',
    medium: '1.6rem',
    large: '1.8rem',
    extraLarge: '2rem'
  },
  borderWidth: '0.2rem',
  borderRadius: '0.8rem',
  fontWeight: '400',
  fontWeightBold: '700',
  spacing: {
    normal: '0.8rem',
    noSpacing: '0',
    small: '0.4rem',
    medium: '1.6rem',
    large: '2.4rem',
    extraLarge: '3.2rem'
  },
  shadow: {
    card: '0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2)'
  },
  colors: {
    primary: '#fce094',
    primaryLight: '#fff8e5',
    secondary: '#fff',
    textSecondary: '#686b6b',
    text: '#454746'
  }
};
