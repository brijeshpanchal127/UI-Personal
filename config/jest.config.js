module.exports = {
  transform: {
    // Configure babel-jest with babel-specific options
    "^.+\\.jsx?$": ['babel-jest', {
      // cwd is defaulted to where we run commands from; so we set it here explicitly instead
      cwd: require('path').resolve(__dirname, './'),

      // cwd is now this folder from above config, so file is located relative to this folder
      configFile: './babel.config.js',
    }]
  },

  // Utilize the 'jest-sonar-reporter' pkg to generate Sonarqube test data format from jest tests
  // testResultsProcessor: 'jest-sonar-reporter',

  // Set root to be actual root of project, so jest can properly scan for tests
  rootDir: '../',

  // Required for enzyme with jest
/*
  setupFilesAfterEnv: [
    '<rootDir>/test/config/setupEnzyme.js'
  ],
*/

  /* COVERAGE */
//  collectCoverage: true,
//  collectCoverageFrom: [
//    'src/**/*.{js,jsx}',
//    '!**/test/**',
//    '!**/node_modules/**',
//    '!**/dist/**'
//  ],
//  coverageDirectory: '<rootDir>/test/coverage/'
};
