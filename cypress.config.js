const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
   specPattern: 'cypress/e2e/**/*.spec.js' // путь к тестам
    },
    env: {
      allure: true,
    },
    video: false,
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  });
