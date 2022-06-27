

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
import '@shelex/cypress-allure-plugin';
import "cypress-real-events/support";
require('@shelex/cypress-allure-plugin');
before(() => {
  process.env. BASE_URL = Cypress.env("BASE_URL");
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })