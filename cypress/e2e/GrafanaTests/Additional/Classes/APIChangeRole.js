const { changeRole } = require('../Functions/APIChangeRoleFunction.js')
const { APIUsersPage } = require("./APIUsersPage");
const { Login} = require("../Functions/LoginTestFunction");
const { APICredentials} = require("../Selectors/APILoginSelectors");

class APIChangeRole  {
    static  createAndChangeRoleForApiUser(roles) {
           return APIUsersPage.createApiUser().then(() => {
               console.log('Start: Creating include methods user');
            changeRole(roles);
        });
    }
}

module.exports = { APIChangeRole }