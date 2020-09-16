import { create } from '@storybook/theming';

export default create({
  base: 'light',
  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',
  // UI
  appBg: '#6d30e7',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  // Text colors
  textColor: 'rgb(255, 250, 250)',
  textInverseColor: 'white',
  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: '#dfdded',
  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  brandTitle: 'Pink Panther Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png',
});
