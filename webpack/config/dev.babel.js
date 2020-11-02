/* eslint-disable import/first */
require('@babel/register');
/* eslint-disable import/order */
// Core
import path from 'path';
import merge from 'webpack-merge';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// Constants
import { SOURCE_DIRECTORY, HOST, PORT } from '../constants';

// Configurations
import getCommonConfig from './common.babel';

// Modules
import * as modules from '../modules';

const entry = [
  require.resolve('react-app-polyfill/ie11'),
  require.resolve('react-app-polyfill/stable'),
  'react-hot-loader/patch', // activate HMR for React
  `webpack-dev-server/client?http://localhost:${PORT}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
  'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
  SOURCE_DIRECTORY, // the entry point of our app
];
export default () => {
  return merge(
    getCommonConfig(),
    {
      mode: 'development',
      devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        disableHostCheck: true,
        host: HOST,
        hot: true,
        inline: true,
        historyApiFallback: {
          disableDotRule: true,
          index: 'index.html',
        },
        open: true,
        overlay: true,
        port: PORT,
        proxy: {
          '/api/**': {
            target: '',
            changeOrigin: true,
            secure: false,
          },
        },
        publicPath: '/',
        stats: {
          assets: true,
          colors: true,
          errors: true,
          errorDetails: true,
          modules: false,
          performance: true,
          hash: false,
          version: false,
          timings: true,
          warnings: true,
          children: false,
        },
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow CORS
        },
        watchOptions: {
          poll: true,
        },
      },
      devtool: 'cheap-module-eval-source-map',
      entry,
      plugins: [
        new ESLintWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
          async: false,
          typescript: {
            configFile: '../../tsconfig.json',
          },
        }),
      ],
      performance: {
        hints: process.env.NODE_ENV === 'development' ? 'warning' : false,
        maxAssetSize: process.env.NODE_ENV === 'development' ? 450000 : Infinity,
        maxEntrypointSize: process.env.NODE_ENV === 'development' ? 8500000 : Infinity,
      },
    },
    modules.connectHMR(),
    modules.connectFriendlyErrors(),
    modules.filterDuplicates(),
    modules.loadDevCss(),
    // modules.openBrowser(),
  );
};
