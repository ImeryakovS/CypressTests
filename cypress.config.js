"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writer_1 = __importDefault(require("@shelex/cypress-allure-plugin/writer"));
const cypress_1 = require("cypress");
module.exports = (0, cypress_1.defineConfig)({
    e2e: {
        setupNodeEvents(on, config) {
            (0, writer_1.default)(on, config);
            return config;
        },
        specPattern: 'cypress/e2e/**/*.spec.js',
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
