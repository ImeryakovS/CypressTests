const { deleteNewUser, createNewUser } = require('../Functions/APIUsersTestFunction.js')

class APIUsersPage {
    static createApiUser () {
        return createNewUser();
    }
    static deleteApiUser () {
        const userId = Cypress.env('userId');
        if (!userId) {
            throw new Error('User ID is missing. Please create user before deleted')
        }
        return deleteNewUser(userId);
    }
}

module.exports = { APIUsersPage }