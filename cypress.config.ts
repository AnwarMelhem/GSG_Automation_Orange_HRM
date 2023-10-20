/// <reference types="Cypress" />

import { defineConfig } from "cypress";
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    //baseUrl:`https://conduit.productionready.io`,
    env: {
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
      allure:true,
      allureResulsPath: "allure-results",
      snapshotOnly: true
    },
    
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
    retries:{
      "runMode":1,
      "openMode":1
    }
  },

});
 