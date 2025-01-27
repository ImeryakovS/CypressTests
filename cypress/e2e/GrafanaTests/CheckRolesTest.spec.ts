import {APIUsersPage} from "./Additional/Classes/APIUsersPage";
import {DashboardPage} from "./Additional/Classes/DashboardPage";
import {ChangeRole} from "./Additional/Classes/ChangeRole";
import {roles, APICredentials} from './Additional/Selectors/APILoginSelectors';
import {login, logout} from "./Additional/Functions/LoginTestFunction";
import {credentials} from "./Additional/Selectors/LoginSelectors";


describe ("Create admin user and check role permissions", () => {
    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleAdmin)
            .then (() => {
                login(APICredentials.login,APICredentials.password);
                DashboardPage.createDashboard("dashboard","Last 15 minutes")
                DashboardPage.deleteAllDashboards()
            })
            .then (() => {
                APIUsersPage.deleteApiUser()
            })
    })
})

describe ("Create viewer user and check role permissions", () => {
    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleViewer)
            .then (() => {
                login(APICredentials.login,APICredentials.password);
                ChangeRole.checkRoleForViewer()
            })
            .then (() => {
                APIUsersPage.deleteApiUser()
        })
    })
})

describe ("Create editor user and check role permissions", () => {
    before(() => {
        cy.log('Created testDashboard for test environment with admin')
        login(credentials.username,credentials.password)
        DashboardPage.createDashboard("dashboard","Last 15 minutes")
        logout()
    })

    after (() => {
        cy.log('Deleted testDashboard for test environment with admin')
        logout()
        login(credentials.username,credentials.password)
        DashboardPage.deleteAllDashboards()
    })

    it ("Created users with Api and changed role for him", () => {
        ChangeRole.createAndChangeRoleForApiUser(roles.roleEditor)
            .then (()=> {
                login(APICredentials.login,APICredentials.password);
                ChangeRole.checkRolesForEditor()
            })
            .then (() => {
                APIUsersPage.deleteApiUser()
            })
    })


})
