const createJestConfig = require('next/jest')({
  dir: './',
})

module.exports = createJestConfig({
  passWithNoTests: true,
  clearMocks: true,
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
})
