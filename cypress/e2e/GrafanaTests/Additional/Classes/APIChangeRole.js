const { changeRole } = require('../Functions/APIChangeRoleFunction.js')
const { APILoginPage } = require("./APILoginPage");
const { Login} = require("../Functions/LoginTestFunction");
const { APICredentials} = require("../Selectors/APILoginSelectors");

class APIChangeRole extends APILoginPage {

    static  createAndVerifyApiUser(roles) {
        return super.createApiUser().then(() => {
            changeRole(roles);
            Login(APICredentials.login, APICredentials.password)
        });
    }
}

module.exports = { APIChangeRole }