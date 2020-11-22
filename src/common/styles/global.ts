import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import PTSansWoff from 'common/assets/fonts/PTSans_Regular.woff';
import PTSansWoff2 from 'common/assets/fonts/PTSans_Regular.woff2';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'PT Sans';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'),
      local('PT Sans'),
      url(${PTSansWoff2}) format('woff2'),
      url(${PTSansWoff}) format('woff');
  }

  html {
    box-sizing: border-box;
    height: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
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
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  #root {
    flex: 1;
    height: 100%;
  }

  textarea {
    resize: none;
    overflow: auto;
  }

  img {
    border-style: none;
  }

  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
    -webkit-tap-highlight-color: transparent;
  }
`;
