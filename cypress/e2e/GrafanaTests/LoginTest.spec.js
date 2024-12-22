const {
    sendResetEmail,
    Login,
    containText } = require('./Additional/Functions/LoginTestFunction.js')
const { loginSelectors, credentials } = require('./Additional/Selectors/LoginSelectors.js')

//запуск в headless режиме npx cypress run --spec "cypress/e2e/GrafanaTests/**/*"
 describe("Test Login Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/login")
    })

    it("User can successfully log in", () => {
     Login();
    })

    it("User received new password on email", () => {
        sendResetEmail()
        cy.get(loginSelectors.login).click() //cy.get(LoginPage.login).click() заменил на cy.get(loginSelectors.login).click()
        sendResetEmail()
        cy.get(loginSelectors.userInput).type(credentials.email)
        cy.get(loginSelectors.submit).click()
        containText('p', 'An email with a reset link has been sent to the email address. You should receive it shortly.')
        cy.get(loginSelectors.login).click()
    })

    it("User successfully return to login", () => {
        sendResetEmail()
        cy.get(loginSelectors.login).click()
        Login();
    })

    it("Error displayed whn incorrect password is displayed", () => {
        cy.get(loginSelectors.user).type(credentials.username)
        cy.get(loginSelectors.password).type((credentials.password)+"wrong")
        cy.get(loginSelectors.submit).click()
        cy.get(loginSelectors.alertError).should('be.visible')
        cy.get(loginSelectors.user).clear()
        containText(loginSelectors.alert,'Email or username is required')
        cy.get(loginSelectors.password).clear()
        containText(loginSelectors.alert,'Password is required')

    })
 })


 
 