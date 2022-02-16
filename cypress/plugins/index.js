/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter=require('@shelex/cypress-allure-plugin/writer');
const { config } = require('cypress/types/bluebird');


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  allureWriter(on,config);
  return config;  
}


// Data driven XLSX 


const xlsx = require('node-xlsx').default;
const fs = require('fs'); //this is for the file
const path = require('path');
module.exports = (on, config) => {
  on('task', { parseXlsx({filePath})
  { return new Promise((resolve, reject) =>
    { try
      {
        const jsonData = xlsx.parse(fs.readFileSync(filePath));
        resolve(jsonData);
      }catch (e)
      {
        reject(e);
      } });
    }}); }
    const readXlsx = require('./read-xlsx')

    module.exports = (on, config) => {
      on('task', {
        'readXlsx': readXlsx.read
      })
    }