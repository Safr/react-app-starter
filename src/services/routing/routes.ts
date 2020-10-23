import { lazy } from '@loadable/component';

const HomePage = lazy(
  () => import(/* webpackChunkName: 'home' */ /* webpackPrefetch: true */ '../../modules/home'),
);
const AboutPage = lazy(
  () => import(/* webpackChunkName: 'about' */ /* webpackPrefetch: true */ '../../modules/about'),
);
const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: '404 page' */ /* webpackPrefetch: true */ '../../modules/not-found'
    ),
);

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
