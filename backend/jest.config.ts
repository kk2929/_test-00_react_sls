// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  // collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!.serverless/**",
  ],
  coverageDirectory: "coverage_dir",
  coverageReporters: ["html"],
  moduleNameMapper: {
    "^@/(.+)$": "<rootDir>/src/$1",
  },
  // reporters: [
  //   "default",
  //   [
  //     "jest-html-reporters",
  //     {
  //       pageTitle: "Test Report",
  //       publicPath: "./tests/report/jest",
  //       filename: `api-unit-test-report.html`,
  //       expand: true,
  //       inlineSource: true,
  //     },
  //   ],
  // ],
};
// preset: "ts-jest",
// testEnvironment: "node",
// roots: ["<rootDir>/tests", "<rootDir>/src"],
// collectCoverageFrom: ["**/*.ts", "!**/node_modules/**"],
// moduleDirectories: ["node_modules", ".", "<rootDir>"],
