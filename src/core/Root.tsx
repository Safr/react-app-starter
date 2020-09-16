import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { renderRoutes } from 'react-router-config';
import { initializeI18n } from 'services/i18n/i18nContainer';
import { BaseLayout } from 'services/layout';
import { routes } from 'services/routing';
import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/global';
import { ErrorBoundary } from 'common/utils/ErrorBoundary';
import { ProgressBar } from 'common/ui/progress-bar/progress-bar';
// import { getEnv } from './getEnv';

const i18n = initializeI18n();

// const { PUBLIC_URL } = getEnv();

const Root = (): React.ReactElement<Record<string, unknown>> => (
  <>
    <ReactQueryDevtools initialIsOpen={false} />
    <ErrorBoundary>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <BaseLayout>
              <React.Suspense fallback={<ProgressBar />}>
                <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={4000} />
                {renderRoutes(routes)}
                <GlobalStyles />
                <Normalize />
              </React.Suspense>
            </BaseLayout>
          </ThemeProvider>
        </BrowserRouter>
      </I18nextProvider>
    </ErrorBoundary>
  </>
);

// eslint-disable-next-line import/no-default-export
export default hot(module)(Root);
