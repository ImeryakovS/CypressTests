// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-real-events';

const {loginSelectors} = require("../e2e/GrafanaTests/Additional/Selectors/LoginSelectors");
Cypress.Commands.add('login', (email, password) => {
    cy.visit("http://localhost:3000/login")
    cy.get('[name="user"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
})
