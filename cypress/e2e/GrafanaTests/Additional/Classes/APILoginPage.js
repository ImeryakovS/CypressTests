const { deleteNewUser, createNewUser } = require('../Functions/APILoginTestFunction.js')

class APILoginPage {
    static createApiUser () {
        void createNewUser();
    }
    static deleteApiUser () {
        deleteNewUser();
    }
}

module.exports = { APILoginPage }