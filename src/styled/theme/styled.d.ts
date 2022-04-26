import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      roboto: string;
    };
    fontSize: string;
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    fontSizeExtraLarge: string;
    fontWeight: string;
    fontWeightBold: string;
    borderWidth: string;
    padding: string;
    paddingSmall: string;
    paddingMedium: string;
    paddingLarge: string;
    paddingExtraLarge: string;
    borderRadius: string;
    boxShadow: string;
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      text: string;
      textSecondary: string;
    };
  }
}
