//const { selectors } = require('../Selectors/selectors');
//const LoginPage = selectors.LoginPage;
const { loginSelectors, credentials } = require('../Selectors/LoginSelectors');

function sendResetEmail () {
    cy.get('[href="/user/password/send-reset-email"]').click()
    cy.url().should('include','/send-reset-email')
}

function Login() {
    cy.get(loginSelectors.user).type(credentials.username)
    cy.get(loginSelectors.password).type(credentials.password)
    cy.get(loginSelectors.submit).click()
    cy.url().should('include','now&timezone=browser')
}

function containText (selector, text) {
    cy.contains(selector , text)
    .should('be.visible')
} 

module.exports = {sendResetEmail, Login, containText};