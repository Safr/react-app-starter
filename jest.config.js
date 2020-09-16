module.exports = {
  automock: false,
  bail: false,
  clearMocks: true,
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['.*\\.d\\.ts'],
  collectCoverage: true,
  // collectCoverageFrom: [
  //   '**/src/**/*.{ts,tsx}',
  //   '!**/loader.{ts,tsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**',
  // ],
  coverageReporters: ['text', 'html', 'json'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: './tsconfig.json',
    },
    window: {},
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['src'],

  // This fixed an error related to the CSS and loading gif breaking
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/core/__mocks__/fileMock.ts',
    '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy',
    // '\\.(css|sass|scss|less)$': '<rootDir>/core/__mocks__/styleMock.ts',
  },
  notify: false,
  preset: 'ts-jest',
  resetMocks: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/cypress/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
