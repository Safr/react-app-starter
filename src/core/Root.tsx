import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ToastContainer, toast } from 'react-toastify';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { I18nextContainer } from 'services/i18n/i18nextContainer';
import { BaseLayout } from 'services/layout';
import { routes } from 'services/routing';
import { theme } from 'common/styles/theme';
import { GlobalStyles } from 'common/styles/global';
import { ErrorBoundary } from 'common/utils/ErrorBoundary';
import { ProgressBar } from 'common/ui/progress-bar/progress-bar';
import { configureDI, DIContext } from './di';
// import { getEnv } from './getEnv';

// const { PUBLIC_URL } = getEnv();

const Root = (): React.ReactElement<Record<string, unknown>> => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <ErrorBoundary>
        <DIContext.Provider value={configureDI()}>
          <I18nextContainer>
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
          </I18nextContainer>
        </DIContext.Provider>
      </ErrorBoundary>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default hot(module)(Root);
