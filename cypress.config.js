const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      specPattern: 'cypress/e2e/**/*.spec.js',// путь к тестам
      retries: {
          runMode: 0,
          openMode: 0,
      },
      watchForFileChanges: false,
    },
    env: {
      allure: true,
    },
    video: false,

    viewportWidth: 1920,
    viewportHeight: 1080,
  });
