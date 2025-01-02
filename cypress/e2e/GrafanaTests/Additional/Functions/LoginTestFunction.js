const { loginSelectors, credentials } = require('../Selectors/LoginSelectors');
const { goToLink } = require('../Functions/PageTestFunction')

function sendResetEmail () {
    cy.get('[href="/user/password/send-reset-email"]').click()
    cy.url().should('include','/send-reset-email')
}

function Login(username,password) {
    cy.visit(`/login`)
    cy.get(loginSelectors.user).type(username)
    cy.get(loginSelectors.password).type(password)
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
    Login(credentials.username, credentials.password);
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

function logout(link) {
    cy.visit('/logout')
}


module.exports = {
    Login,
    containText,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage,
    logout
};