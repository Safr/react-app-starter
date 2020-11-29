module.exports = api => {
  const env = api.env(); // process.env.NODE_ENV

  /**
   * It's recommended to use this type of caching for better consistency
   * https://babeljs.io/docs/en/config-files#apicache
   */
  api.cache.using(() => env === 'development');

  const presets = [
    [
      '@babel/preset-env',
      {
        debug: false,
        spec: false,
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true,
        },
        shippedProposals: true,
        targets: {
          node: '12.8.3',
          ie: '11',
          android: '11',
          chrome: '85',
          edge: '83',
          firefox: '80',
          ios: '13',
          safari: '13',
        },
      },
    ],
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true, // this is important for proper files watching
      },
    ],
    '@babel/preset-react',
    [
      'minify',
      {
        builtIns: false,
        evaluate: false,
        mangle: false,
      },
    ],
  ];

  const ignore = ['node_modules', 'build', 'dist'];

  const plugins = [
    '@loadable/babel-plugin',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-private-methods', { loose: false }],

    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-jsx-source',
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        loose: true,
      },
    ],
    [
      'styled-components',
      {
        pure: true,
        ssr: true,
        displayName: process.env.NODE_ENV === 'development',
        preprocess: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ];

  if (env === 'development') {
    plugins.push('react-hot-loader/babel');
    plugins.push('react-refresh/babel');
  }

  if (env === 'production') {
    plugins.push('transform-react-remove-prop-types');
    plugins.push('@babel/plugin-transform-react-constant-elements');
    plugins.push('@babel/plugin-transform-react-inline-elements');
    plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  if (env === 'test') {
    plugins.push('dynamic-import-node');
  }

  return {
    ignore,
    presets,
    plugins,
    retainLines: true,
  };
};
