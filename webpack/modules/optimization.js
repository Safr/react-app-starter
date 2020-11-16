// Core
import { ContextReplacementPlugin, HashedModuleIdsPlugin } from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import UnusedFilesWebpackPlugin from 'unused-files-webpack-plugin';
import CacheManifestPlugin from 'cachemanifest-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ImageminWebpackPlugin from 'imagemin-webpack';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

export const optimizeBuild = () => ({
  optimization: {
    chunkIds: false,
    concatenateModules: true,
    flagIncludedChunks: true,
    mergeDuplicateChunks: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    moduleIds: false,
    namedChunks: true,
    namedModules: false,
    nodeEnv: 'production',
    noEmitOnErrors: true,
    occurrenceOrder: true,
    providedExports: true,
    removeEmptyChunks: true,
    removeAvailableModules: true,
    runtimeChunk: true,
    sideEffects: true,
    splitChunks: {
      chunks: 'all',
      hidePathInfo: true,
      minSize: 30000, // bytes
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    usedExports: true,
  },
});

export const compressAssets = () => ({
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),
  ],
});

export const optimizeImages = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins: [
          imageminMozjpeg({
            progressive: true,
            quality: 60,
          }),
          imageminPngquant({
            quality: 60,
          }),
          imageminSvgo({
            plugins: [{ removeViewBox: false }],
          }),
        ],
      },
    }),
  ],
});

export const filterMomentLocales = () => ({
  plugins: [new ContextReplacementPlugin(/moment\/locale$/, /(en|ru)/)],
});

export const filterDuplicates = () => ({
  plugins: [new DuplicatePackageCheckerPlugin()],
});

export const filterUnusedFiles = () => ({
  plugins: [new UnusedFilesWebpackPlugin()],
});

export const cacheWebpackChunks = () => ({
  plugins: [new CacheManifestPlugin()],
});
