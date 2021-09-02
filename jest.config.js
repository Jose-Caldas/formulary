module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "./jest"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
};
