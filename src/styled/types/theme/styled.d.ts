import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      roboto: string;
    };
    fontSize: {
      normal: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    fontWeight: string;
    fontWeightBold: string;
    borderWidth: string;
    spacing: {
      noSpacing: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    borderRadius: string;
    shadow: {
      card: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      text: string;
      textSecondary: string;
    };
  }
}
