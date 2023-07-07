/* eslint-disable */
export default {
  displayName: 'blog-api',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/blog-api',
  setupFiles: ['<rootDir>/src/lib/test-utils/setup-env.ts'],
};
