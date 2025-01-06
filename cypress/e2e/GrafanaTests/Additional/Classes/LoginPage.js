const {
    login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} = require('../Functions/LoginTestFunction.js')
const { deleteNewUser, createNewUser } = require('../Functions/APIUsersTestFunction.js')
const { credentials } = require('../Selectors/LoginSelectors');
const {  APICredentials} = require("../Selectors/APILoginSelectors");

class LoginPage {
    static successLogin() {
        login(credentials.username,credentials.password)
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
        void createNewUser(APICredentials);
    }
    static deleteApiUser () {
        deleteNewUser();
    }
}

module.exports = { LoginPage };