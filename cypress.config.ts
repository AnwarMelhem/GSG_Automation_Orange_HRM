/// <reference types="Cypress" />

import { defineConfig } from "cypress";
import * as XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import * as path from 'path';
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
      on ('task',{
        async convertXlsxToJson(xlsxPath:any){
          const workbook= XLSX.readFile(xlsxPath);// Read File from the provided path (path from Test Case)
          const worksheet=workbook.Sheets[workbook.SheetNames[0]];// Take this and get the first sheet inside the file
          const jsonData= XLSX.utils.sheet_to_json(worksheet); // Convert this sheet (first tab) to json file
          const fileName= path.basename(xlsxPath, '.xlsx'); // provide the name of json file the dawnloaded excel file
          const jsonFilePath=`cypress/fixtures/${fileName}.json` // Provide the path for json file
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null,1)) // Write the json file on provide and convert javascript to object json string
          return null
        }
      })
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
      "runMode":0,
      "openMode":0
    }
  },

});
 