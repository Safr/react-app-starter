// Core
import { DefinePlugin, ProvidePlugin, HotModuleReplacementPlugin } from 'webpack';
import WebpackBar from 'webpackbar';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import OpenBrowserPlugin from 'open-browser-webpack-plugin';
// Constants
import { PROJECT_ROOT } from '../constants';

export const connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
});

export const connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

export const connectHMR = () => ({
  plugins: [
    new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } }),
    new HotModuleReplacementPlugin(),
  ],
});

export const cleanDirectories = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      root: PROJECT_ROOT,
    }),
  ],
});

// export const openBrowser = () => ({
//   plugins: [new OpenBrowserPlugin({ url: `http://${HOST}:${PORT}` })],
// });

export const connectBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV === 'analyze' ? 'static' : 'disabled',
      defaultSizes: 'gzip',
      openAnalyzer: false,
      generateStatsFile: true,
      logLevel: 'silent',
      reportFilename: 'report.html',
    }),
  ],
});

export const defineEnvVariables = () => {
  return {
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
        },
      }),
    ],
  };
};

export const provideGlobals = () => ({
  plugins: [new ProvidePlugin({})],
});
