/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  root: true,
  env: {
    es2020: true,
    jest: true,
    browser: true,
    node: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
  ],
  globals: {
    window: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'styled-components-config',
    'react-hooks',
    'jest-dom',
    'testing-library',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    // disable dev dependencies for storybook
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.test.tsx',
          '**/storybook/*.js',
          '**/webpack.config.js',
          '**/*.webpack.config.js',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], ['parent', 'sibling'], 'index'],
        'newlines-between': 'never',
      },
    ],
    // increase max line length to 100
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '*'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx', '*'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '*'],
        paths: ['./src'],
      },
      typescript: {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
