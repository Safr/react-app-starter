// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const loadCss = ({ sourceMap = true } = { sourceMap: true }) => ({
  loader: 'css-loader',
  options: {
    sourceMap,
  },
});

export const loadDevCss = () => ({
  module: {
    rules: [
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', loadCss()],
      },
      // Preprocess 3rd party .css files located in node_modules
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', loadCss()],
      },
    ],
  },
});

export const loadProdCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, loadCss({ sourceMap: false })],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].[id].css',
      chunkFilename: 'css/[name].[contenthash:5].[id].css',
    }),
  ],
});
