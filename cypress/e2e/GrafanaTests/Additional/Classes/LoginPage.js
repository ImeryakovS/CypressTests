const {
    Login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} = require('../Functions/LoginTestFunction.js')
const { deleteNewUser, createAndSaveNewUser } = require('../Functions/APILoginTestFunction.js')

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
    static createApiUser () {
        createAndSaveNewUser();
    }
    static deleteApiUser () {
        deleteNewUser();
    }
}

module.exports = { LoginPage };