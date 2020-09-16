import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  #root,
  body,
  html {
    min-width: 320px;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-family: 'Tt norms', sans-serif;
    scroll-behavior: smooth;
  }

  #root {
    flex: 1;
    height: 100%;
  }
`;
