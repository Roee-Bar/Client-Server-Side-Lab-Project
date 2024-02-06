// jest.config.js

module.exports = {
    // The root directory that Jest should scan for tests and modules
    rootDir: 'D:/Codeing/Local Repositories/Client Server Side Lab Project',
  
    // The test environment that will be used for testing
    testEnvironment: 'node',
  
    // An array of file extensions that Jest should look for
    moduleFileExtensions: ['js', 'json'],
  
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src'],
  
    // A map from regular expressions to paths to transformers
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  };
  