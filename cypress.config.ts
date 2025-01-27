import  allureWriter  from '@shelex/cypress-allure-plugin/writer'
import { defineConfig } from 'cypress';


module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      },
      specPattern: 'cypress/e2e/**/*.spec.ts',// путь к тестам
      baseUrl: 'http://localhost:3000',
      retries: {
          runMode: 0,
          openMode: 0,
      },
      watchForFileChanges: false,
      screenshotsFolder: 'cypress/screenshots',
      videosFolder: 'cypress/videos',
  },
    env: {
      allure: true,
    },
    video: true,

    viewportWidth: 1920,
    viewportHeight: 1080,
  });
