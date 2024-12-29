const { APIChangeRole } = require("./Additional/Classes/APIChangeRole");
const {  roles } = require('./Additional/Selectors/APILoginSelectors');
const {DashboardPage} = require("./Additional/Classes/DashboardPage");

describe ("Create users, changed roles and check role changes", () => {
    it ("Created users with Api, changed roles and check login for this user, after check dashboard functional", () => {
        APIChangeRole.createAndVerifyApiUser(roles.roleAdmin)
            .then (() => {
                DashboardPage.createDashboard("dashboard", "Last 15 minutes");
            })
            .then(() => {
                DashboardPage.deleteAllDashboards();
            })
            .then(() => {
                APIChangeRole.deleteApiUser()
            })
    })
})