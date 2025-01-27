import { loginSelectors, credentials } from '../Selectors/LoginSelectors';

export function sendResetEmail (): void {
    cy.get('[href="/user/password/send-reset-email"]').click()
    cy.url().should('include','/send-reset-email')
}

export function login(username: string,password: string): void {
    cy.visit(`/login`)
    cy.get(loginSelectors.user).type(username)
    cy.get(loginSelectors.password).type(password)
    cy.get(loginSelectors.submit).click()
    cy.url().should('include','now&timezone=browser')
}

export function containText (selector: string, text: string): void {
    cy.contains(selector , text)
    .should('be.visible')
}

export function receiveNewCredentials (): void {
    sendResetEmail()
    cy.get(loginSelectors.login).click()
    sendResetEmail()
    cy.get(loginSelectors.userInput).type(credentials.email)
    cy.get(loginSelectors.submit).click()
    containText('p', 'An email with a reset link has been sent to the email address. You should receive it shortly.')
    cy.get(loginSelectors.login).click()
}

export function returnToLogin (): void {
    sendResetEmail()
    cy.get(loginSelectors.login).click()
    login(credentials.username, credentials.password);
}

export function checkErrorLoginMessage(): void {
    cy.get(loginSelectors.user).type(credentials.username)
    cy.get(loginSelectors.password).type((credentials.password)+"wrong")
    cy.get(loginSelectors.submit).click()
    cy.get(loginSelectors.alertError).should('be.visible')
    cy.get(loginSelectors.user).clear()
    containText(loginSelectors.alert,'Email or username is required')
    cy.get(loginSelectors.password).clear()
    containText(loginSelectors.alert,'Password is required')
}

export function logout(): void {
    cy.visit('/logout')
}
