/* eslint-disable import/order */
// Core
import path from 'path';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
// Constants
import { SOURCE_DIRECTORY } from '../constants';

const FILE_LOADER = 'FILE_LOADER';
const FILE_LOADER_TARGET = 'images/[name].[hash:5].[ext]';

export const preloadAssets = () => ({
  plugins: [
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
    }),
  ],
});

export const connectFavicons = () => ({
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.resolve(SOURCE_DIRECTORY, './common/assets/images/favicon.png'),
      background: '#ffeeee',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
});

export const connectHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SOURCE_DIRECTORY}/index.html`,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        collapseInlinespace: true,
        preserveLineBreaks: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: 'body',
    }),
  ],
});

export const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: `${FILE_LOADER}`,
            options: {
              name: `${FILE_LOADER_TARGET}`,
            },
          },
        ],
      },
    ],
  },
});

export const loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: {
          test: /\.js$/,
        },
        use: [
          '@svgr/webpack',
          {
            loader: `${FILE_LOADER}`,
            options: {
              name: `${FILE_LOADER_TARGET}`,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: [/-inline\.svg$/],
        issuer: {
          test: /\.css$/,
        },
        use: [
          {
            loader: `${FILE_LOADER}`,
            options: {
              name: `${FILE_LOADER_TARGET}`,
            },
          },
        ],
      },
      {
        test: p => /-inline\.svg$/.test(p),
        loader: 'svg-inline-loader',
      },
    ],
  },
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: `${FILE_LOADER}`,
            options: {
              name: 'fonts/[name].[hash:5].[ext]',
            },
          },
        ],
      },
    ],
  },
});
