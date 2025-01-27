import {LoginPage} from './Additional/Classes/LoginPage'
import {goToLink} from './Additional/Functions/PageTestFunction'

 describe("Test Login Page", () => {
    beforeEach(() => {
        goToLink(`/login`)
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
