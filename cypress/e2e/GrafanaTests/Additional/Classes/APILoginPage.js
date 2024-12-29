const { deleteNewUser, createNewUser} = require('../Functions/APILoginTestFunction.js')

class APILoginPage {
    static createApiUser () {
        return createNewUser();
    }
    static deleteApiUser () {
        return deleteNewUser();
    }
}

module.exports = { APILoginPage }