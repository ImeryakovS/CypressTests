const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
   specPattern: 'cypress/e2e/**/*.spec.js' // путь к тестам
    },
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  });
