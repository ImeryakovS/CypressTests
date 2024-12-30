const {
    Login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} = require('../Functions/LoginTestFunction.js')
const { deleteNewUser, createNewUser } = require('../Functions/APIUsersTestFunction.js')
const { credentials } = require('../Selectors/LoginSelectors');

class LoginPage {
    static successLogin() {
        Login(credentials.username,credentials.password)
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