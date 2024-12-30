const { changeRole } = require('../Functions/APIChangeRoleFunction.js')
const { APIUsersPage } = require("./APIUsersPage");
const { Login} = require("../Functions/LoginTestFunction");
const { APICredentials} = require("../Selectors/APILoginSelectors");

class APIChangeRole extends APIUsersPage {

    static  createAndVerifyApiUser(roles) {
        return super.createApiUser().then(() => {
            changeRole(roles);
            Login(APICredentials.login, APICredentials.password)
        });
    }
}

module.exports = { APIChangeRole }