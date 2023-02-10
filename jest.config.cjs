const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  rootDir: './',
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/constants/(.*)$': '<rootDir>/constants/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/sections/(.*)$': '<rootDir>/pages/$1',
  },
  coveragePathIgnorePatterns: ['constants'],
  moduleDirectories: ['node_modules', '<rootDir>/../'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
