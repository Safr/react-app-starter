import { lazy } from '@loadable/component';

const HomePage = lazy(() => import(/* webpackPrefetch: true */ '../../modules/home'));
const AboutPage = lazy(() => import(/* webpackPrefetch: true */ '../../modules/about'));
const NotFoundPage = lazy(() => import('../../modules/not-found'));

const routes = [
  {
    component: HomePage,
    exact: true,
    path: '/',
  },
  {
    component: AboutPage,
    exact: true,
    path: '/about',
  },
  {
    component: NotFoundPage,
  },
];

export { routes };
