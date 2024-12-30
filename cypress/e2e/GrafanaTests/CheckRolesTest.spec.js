const { APIChangeRole } = require("./Additional/Classes/APIChangeRole");
const {  roles, APICredentials } = require('./Additional/Selectors/APILoginSelectors');
const { APIUsersPage } = require("./Additional/Classes/APIUsersPage");
const { Login} = require("./Additional/Functions/LoginTestFunction");
const { DashboardPage } = require("./Additional/Classes/DashboardPage");

describe ("Create users, changed roles and check role changes", () => {
    it ("Created users with Api, changed roles and check login for this user, after check dashboard functional", () => {
        APIChangeRole.createAndChangeRoleForApiUser(roles.roleAdmin)
    })

    it ('Login for user with Admin role ', () => {
        Login(APICredentials.login,APICredentials.password);
       DashboardPage.createDashboard("dashboard","Last 15 minutes")
       DashboardPage.deleteAllDashboards()
    });

    it ("User successfully deleted with API methods", () => {
        APIUsersPage.deleteApiUser()
    })

})
