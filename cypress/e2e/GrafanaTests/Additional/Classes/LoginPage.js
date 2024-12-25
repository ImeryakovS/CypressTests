const {
    Login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} = require('../Functions/LoginTestFunction.js')

class LoginPage {
    static successLogin() {
        Login()
    };
    static newCredentials() {
        receiveNewCredentials()
    };
    static goBackToLogin() {
        returnToLogin()
    };
    static incorrectCredentials() {
        checkErrorLoginMessage()
    };
}

module.exports = { LoginPage };