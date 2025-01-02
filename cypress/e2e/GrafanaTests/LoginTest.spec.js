const { goToLink } = require('./Additional/Functions/PageTestFunction.js')
const { LoginPage } = require('./Additional/Classes/LoginPage.js')
const { grafanaURl} = require("./Additional/Selectors/URL");

 describe("Test Login Page", () => {
    beforeEach(() => {
        goToLink(`${grafanaURl}/login`)
    })

    it ("User can successfully log in", () => {
        LoginPage.successLogin();
    })

    it ("User received new password on email", () => {
        LoginPage.newCredentials();
    })

    it ("User successfully return to login", () => {
        LoginPage.goBackToLogin();
    })

    it("Error displayed when incorrect password is displayed", () => {
        LoginPage.incorrectCredentials();
    })

 })
