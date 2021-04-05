module.exports = {
  collectCoverageFrom: [
    '**/__test__/*.{js,jsx}',
    '!**/components/**',
    '!**/dev/**',
    '!**/node_modules/**',
  ],
  modulePaths: ['src'],
  testURL: 'http://localhost',
  verbose: true,
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
