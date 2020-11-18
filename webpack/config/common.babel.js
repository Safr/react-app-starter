import merge from 'webpack-merge';
import path from 'path';
import { CheckerPlugin } from 'awesome-typescript-loader';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';
// Modules
import * as modules from '../modules';

// eslint-disable-next-line import/no-default-export
export default () => {
  const { NODE_ENV } = process.env;
  const IS_DEVELOPMENT = NODE_ENV === 'development';
  return merge(
    {
      cache: false,
      context: __dirname,
      output: {
        path: BUILD_DIRECTORY,
        publicPath: '/',
        pathinfo: true,
        filename: IS_DEVELOPMENT
          ? 'js/bundle.[hash].chunk.js'
          : 'js/bundle.[chunkhash].bundle.js?v=4', // entry point bundle name
        chunkFilename: 'js/bundle.[id].[chunkhash].chunk.js', // chunk name
        hashDigestLength: 5,
      },
      plugins: [
        new CheckerPlugin(),
        new CircularDependencyPlugin({
          exclude: /node_modules/,
          failOnError: true,
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: `${path.join(...[SOURCE_DIRECTORY, 'manifest.json'])}`,
              to: `${BUILD_DIRECTORY}`,
            },
            {
              from: `${path.join(...[SOURCE_DIRECTORY, 'common', 'assets', 'fonts'])}`,
              to: `${BUILD_DIRECTORY}/assets/fonts`,
            },
            {
              from: `${path.join(...[SOURCE_DIRECTORY, 'common', 'assets', 'images'])}`,
              to: `${BUILD_DIRECTORY}/assets/images`,
            },
            {
              from: `${path.join(...[SOURCE_DIRECTORY, 'browserconfig.xml'])}`,
              to: `${BUILD_DIRECTORY}`,
            },
          ],
        }),
        new Dotenv({ systemvars: true }),
      ],
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.mjs', '*'],
        mainFiles: ['index'],
        mainFields: ['browser', 'module', 'main'],
        modules: ['src', 'node_modules'],
      },
      target: 'web', // Make web variables accessible to webpack, e.g. window
    },
    modules.defineEnvVariables(),
    modules.loadJavaScript(),
    modules.loadFonts(),
    modules.loadImages(),
    modules.loadSvg(),
    modules.connectHtml(),
    modules.connectFavicons(),
    modules.filterMomentLocales(),
    modules.filterDuplicates(),
    modules.filterUnusedFiles(),
    modules.provideGlobals(),
    modules.cacheWebpackChunks(),
    // modules.preloadAssets(),
    modules.provideWebManifest(),
    modules.providePWA(),
  );
};
