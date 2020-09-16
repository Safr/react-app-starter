import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Button } from './button';

describe('<Button />', () => {
  it('Renders without crashing', () => {
    const onClick = jest.fn();
    // Render new instance in every test to prevent leaking state
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button color="#000" onClick={onClick}>
          Button text
        </Button>
      </ThemeProvider>,
    );
    expect(getByText(/Button text/i)).toBeInTheDocument();
  });
});
