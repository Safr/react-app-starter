module.exports = api => {
  const env = api.env();

  api.cache.using(() => env === 'development');

  const plugins = ['dynamic-import-node'];

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true,
          },
          shippedProposals: true,
          spec: true,
          loose: false,
          debug: false,
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins,
  };
};
