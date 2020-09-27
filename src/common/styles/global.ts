import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

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
    font-family: 'Tt norms', sans-serif;
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
