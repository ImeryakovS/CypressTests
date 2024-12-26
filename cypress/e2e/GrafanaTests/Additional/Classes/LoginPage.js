const {
    Login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} = require('../Functions/LoginTestFunction.js')
const { deleteNewUser, createNewUser } = require('../Functions/APILoginTestFunction.js')

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
        void createNewUser();
    }
    static deleteApiUser () {
        deleteNewUser();
    }
}

module.exports = { LoginPage };