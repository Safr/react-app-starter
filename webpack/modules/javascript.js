export const loadJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheCompression: process.env.NODE_ENV === 'production',
              cacheDirectory: true,
              compact: process.env.NODE_ENV === 'production',
            },
          },
          'awesome-typescript-loader',
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.(ts|js)x?$/,
        loader: 'stylelint-custom-processor-loader',
      },
      {
        test: /\.worker\.(ts|js)x?$/,
        use: { loader: 'worker-loader' },
      },
    ],
  },
});
