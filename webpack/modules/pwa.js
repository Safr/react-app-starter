/* eslint-disable import/order */
// Core
import path from 'path';
import PrerenderSPAPlugin from 'prerender-spa-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import ManifestPlugin from 'webpack-manifest-plugin';

// Constants
import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants';

export const providePWA = () => ({
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: BUILD_DIRECTORY,
      routes: ['/', '/404'],
    }),
    new WebpackPwaManifest({
      name: 'React App Starter',
      short_name: 'React Starter',
      description: 'Fully enhanced React Starter for SPA apps',
      display: 'standalone',
      background_color: '#fafafa',
      start_url: './index.html',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-16x16.png',
          ),
          size: '16x16',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-32x32.png',
          ),
          size: '32x32',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-48x48.png',
          ),
          size: '48x48',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-72x72.png',
          ),
          size: '72x72',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-96x96.png',
          ),
          size: '96x96',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-144x144.png',
          ),
          size: '144x144',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-192x192.png',
          ),
          size: '192x192',
          type: 'image/png',
        },
        {
          src: path.resolve(
            SOURCE_DIRECTORY,
            'common/assets/images/android-launcher-icon-512x512.png',
          ),
          size: '512x512',
          type: 'image/png',
        },
      ],
    }),
  ],
});

export const provideWebManifest = () => ({
  plugins: [new ManifestPlugin()],
});
