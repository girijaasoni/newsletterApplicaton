// eslint-disable-next-line no-undef
module.exports = {
  setupFilesAfterEnv: ['./rtl.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
};
