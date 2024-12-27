const { loginSelectors, credentials } = require('../Selectors/LoginSelectors');
const {grafanaURl} = require("../Selectors/URL");

function sendResetEmail () {
    cy.get('[href="/user/password/send-reset-email"]').click()
    cy.url().should('include','/send-reset-email')
}

function Login() {
    cy.visit(`${grafanaURl}/login`)
    cy.get(loginSelectors.user).type(credentials.username)
    cy.get(loginSelectors.password).type(credentials.password)
    cy.get(loginSelectors.submit).click()
    cy.url().should('include','now&timezone=browser')
}

function containText (selector, text) {
    cy.contains(selector , text)
    .should('be.visible')
}

function receiveNewCredentials () {
    sendResetEmail()
    cy.get(loginSelectors.login).click()
    sendResetEmail()
    cy.get(loginSelectors.userInput).type(credentials.email)
    cy.get(loginSelectors.submit).click()
    containText('p', 'An email with a reset link has been sent to the email address. You should receive it shortly.')
    cy.get(loginSelectors.login).click()
}

function returnToLogin () {
    sendResetEmail()
    cy.get(loginSelectors.login).click()
    Login();
}

function checkErrorLoginMessage() {
    cy.get(loginSelectors.user).type(credentials.username)
    cy.get(loginSelectors.password).type((credentials.password)+"wrong")
    cy.get(loginSelectors.submit).click()
    cy.get(loginSelectors.alertError).should('be.visible')
    cy.get(loginSelectors.user).clear()
    containText(loginSelectors.alert,'Email or username is required')
    cy.get(loginSelectors.password).clear()
    containText(loginSelectors.alert,'Password is required')
}

module.exports = {
    Login,
    containText,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage
};