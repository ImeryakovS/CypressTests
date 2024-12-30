const { deleteNewUser, createNewUser} = require('../Functions/APIUsersTestFunction.js')

class APIUsersPage {
    static createApiUser () {
        return createNewUser();
    }
    static deleteApiUser () {
        return deleteNewUser();
    }
}

module.exports = { APIUsersPage }