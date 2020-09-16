import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/common/styles/theme';
import { GlobalStyles } from '../src/common/styles/global';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    showRoots: true,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
));

addDecorator(withA11y);
addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTablesExclude: [ThemeProvider], // do not display propTable for HOC
  }),
);
addDecorator(withKnobs);
addDecorator(withPropsTable);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
