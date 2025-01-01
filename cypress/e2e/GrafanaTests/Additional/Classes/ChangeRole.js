const { changeRole } = require('../Functions/APIChangeRoleFunction.js')
const { APIUsersPage } = require("./APIUsersPage");
const { checkPermissionsViewer, checkPermissionsEditor } = require('../Functions/CheckRoleFunction.js')

class ChangeRole  {
    static  createAndChangeRoleForApiUser(roles) {
           return APIUsersPage.createApiUser().then(() => {
            changeRole(roles);
        });
    }

    static checkRoleForViewer() {
        checkPermissionsViewer('/dashboard/new')
    }

    static checkRolesForEditor() {
        checkPermissionsEditor()
    }
}

module.exports = { ChangeRole }