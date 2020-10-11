/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import offlineRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { getEnv } from 'core/getEnv';
import Root from 'core/root';

const { isProduction, withHot } = getEnv();

function render(component: React.ReactElement): void {
  ReactDOM.render(component, window.document.getElementById('root'));
}

/* Hot Module Replacement API */
if (withHot) {
  (module as any).hot.accept(['./core/Root'], () => {
    const NextApp: typeof Root = require('core/Root').Root;
    render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
    );
  });
}

render(<Root />);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (isProduction) {
  offlineRuntime.install(); // eslint-disable-line global-require
}
