import { createGlobalStyle } from 'styled-components';

export const CssBaseline = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeight};
    line-height: 1.6;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.primary};
  }
  
  #root {
    min-height: 100vh;
    display: flex;
  }
  
`;
