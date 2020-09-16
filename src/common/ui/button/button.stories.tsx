import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

storiesOf('Button', module).add('basic', () => (
  <Button
    color={select('color', { Red: 'red', Dark: 'darkred' }, 'red')}
    disabled={boolean('disabled', false)}
    onClick={action('clicked')}
  >
    {text('text', 'Hello World')}
  </Button>
));
