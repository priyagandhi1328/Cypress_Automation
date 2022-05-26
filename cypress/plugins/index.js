/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env

  config.env.username = process.env.USER_NAME
  // do not forget to return the changed config object!
  return config
}

const { isFileExist } = require('cy-verify-downloads');

module.exports = (on, config) => {
  on('task', { isFileExist })
}

// require("dotenv").config();
ignoreErrors: [
  // Ignore Safari browser errors
  'ResizeObserver loop limit exceeded'
];