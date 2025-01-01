const { ChangeRole } = require("./Additional/Classes/ChangeRole");
const {  roles, APICredentials } = require('./Additional/Selectors/APILoginSelectors');
const { APIUsersPage } = require("./Additional/Classes/APIUsersPage");
const { Login} = require("./Additional/Functions/LoginTestFunction");
const { DashboardPage } = require("./Additional/Classes/DashboardPage");
const { credentials} = require("./Additional/Selectors/LoginSelectors");
//пока что данный тест проваливается в headless режиме. Нужно разбираться с асинхронностью
describe ("Create admin user and check role permissions", () => {
    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleAdmin)
    })

    it ('Login for user with Admin role and check permissions (create and delete dashboards) ', () => {
        Login(APICredentials.login,APICredentials.password);
       DashboardPage.createDashboard("dashboard","Last 15 minutes")
       DashboardPage.deleteAllDashboards()
    });

    it ("User successfully deleted with API methods", () => {
        APIUsersPage.deleteApiUser()
    })
})

describe ("Create viewer user and check role permissions", () => {
    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleViewer)
    })

    it ('Login for user with viewer role (go to page for create dashboards, and check exclude this page)', () => {
        Login(APICredentials.login,APICredentials.password);
        ChangeRole.checkRoleForViewer()
    });

    it ("User successfully deleted with API methods", () => {
        APIUsersPage.deleteApiUser()
    })

})

describe.only ("Create editor user and check role permissions", () => {

    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleEditor)
    })

    it ('Admin created dashboard for test ', () => {
        Login(credentials.username,credentials.password)
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
    });

    it ('Login for user with editor role and check permissions (edit dashboards and check delete button)', () => {
        Login(APICredentials.login,APICredentials.password);
        ChangeRole.checkRolesForEditor()
    });

    it ("Admin deleted dashboards", () => {
        Login(credentials.username,credentials.password)
        DashboardPage.deleteAllDashboards()
    })

    it ("User successfully deleted with API methods", () => {
        APIUsersPage.deleteApiUser()
    })

})
