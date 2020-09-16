/* eslint-disable import/first */
require('@babel/register');
// Core
import merge from 'webpack-merge';
// import CnameWebpackPlugin from 'cname-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import getCommonConfig from './common.babel';
// Constants
import { SOURCE_DIRECTORY } from '../constants';
// Modules
import * as modules from '../modules';

// eslint-disable-next-line import/no-default-export
export default () => {
  return merge(
    getCommonConfig(),
    {
      mode: 'production',
      devtool: false,
      entry: [SOURCE_DIRECTORY],
    },
    {
      plugins: [
        // enable if you want your custom domain
        // new CnameWebpackPlugin({ domain: 'react-app.starter' }),
        new ScriptExtHtmlWebpackPlugin({
          defaultAttribute: 'defer',
        }),
      ],
    },
    modules.cleanDirectories(),
    modules.connectBuildProgressIndicator(),
    modules.loadProdCss(),
    modules.optimizeImages(),
    modules.optimizeBuild(),
    modules.connectBundleAnalyzer(),
  );
};
