const { goToLink } = require('./Additional/Functions/PageTestFunction.js')
const { LoginPage } = require('./Additional/Classes/LoginPage.js')

 describe("Test Login Page", () => {
    beforeEach(() => {
        goToLink("http://localhost:3000/login")
    })

    it("User can successfully log in", () => {
        LoginPage.successLogin();
    })

    it("User received new password on email", () => {
        LoginPage.newCredentials();
    })

    it("User successfully return to login", () => {
        LoginPage.goBackToLogin();
    })

    it("Error displayed whn incorrect password is displayed", () => {
        LoginPage.incorrectCredentials();
    })

 })

describe.only ("API tests", () => {
    it ("User successfully created with API methods", () => {
        LoginPage.createApiUser()
    })

    it ("User successfully deleted with API methods", () => {
        LoginPage.deleteApiUser()
    })
})