module.exports = {
  preset: 'react-native',
  collectCoverage: false,
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  //setupFiles: ['<rootDir>/jest/setup.js'],
  //snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
  //coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
};
